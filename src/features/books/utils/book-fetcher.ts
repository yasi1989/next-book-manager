"use server";

import { prisma } from "@/lib/prisma";
import { Book } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getStoragePublicUrl } from "./auth-utils";
import { FetchBookResult, FetchBooksResult } from "../types/type";

export async function fetchBooks(): Promise<FetchBooksResult> {
  try {
    const userId = await getAuthenticatedUserId();
    const books = await prisma.book.findMany({ where: { userId },});
    const enrichedBooks = await Promise.all(books.map((book) => enrichBookWithImageUrl(book)));
    return { success: true, books: enrichedBooks };
  } catch (error) {
    console.error('書籍情報の取得に失敗しました:', error);
    return { success: false, error: "書籍情報の取得に失敗しました" };
  }
}

export async function fetchBookById(id: string): Promise<FetchBookResult> {
  try {
    const userId = await getAuthenticatedUserId();
    const book = await prisma.book.findUnique({ where: { id, userId },});
    if (!book) {
      console.log('書籍が見つかりませんでした: ID', id);
      return { success: false, error: "指定された書籍が見つかりませんでした" };
    }
    const enrichedBook = await enrichBookWithImageUrl(book);
    return { success: true, book: enrichedBook };
  } catch (error) {
    console.error('書籍情報の取得に失敗しました:', error);
    return { success: false, error: "書籍情報の取得に失敗しました" };
  }
}

async function enrichBookWithImageUrl(book: Book): Promise<Book> {
  if (!book.coverUrl) return book;
  const publicUrl = await getStoragePublicUrl(book.coverUrl);
  return { ...book, coverUrl: publicUrl };
}

async function getAuthenticatedUserId(): Promise<string> {
  const { userId } = await auth();
  if (!userId) redirect("sign-in");
  return userId;
}