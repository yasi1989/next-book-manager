"use server";

import { z } from "zod";
import { AddFormSchema, EditFormSchema } from "../types/form-schema";
import { BookStateReturn } from "../types/type";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { URL } from "../const/const";

export async function addBookAction(
    values: z.infer<typeof AddFormSchema>
  ): Promise<BookStateReturn> {
    try {
      const userId = await getAuthenticatedUserId();
      const imagePath = values.file ? await uploadFile(values.file[0]) : undefined;
  
      await prisma.book.create({
        data: {
          title: values.title,
          author: values.author,
          status: values.status,
          userId,
          year: values.year,
          coverUrl: imagePath,
        },
      });
  
      return { error: "", success: true };
    } catch (error) {
      return handleError(error);
    }
  }

  export async function editBookAction(
    values: z.infer<typeof EditFormSchema>
  ): Promise<BookStateReturn> {
    try {
      const userId = await getAuthenticatedUserId();
      const existingBook = await getExistingBook(values.id, userId);
  
      let imagePath = existingBook.coverUrl;
      if (values.file) {
        if (existingBook.coverUrl) {
          await deleteFileIfExists(existingBook.coverUrl);
        }
        imagePath = await uploadFile(values.file[0]);
      }
  
      await prisma.book.update({
        where: { id: values.id },
        data: {
          title: values.title,
          author: values.author,
          status: values.status,
          userId,
          year: values.year,
          coverUrl: imagePath,
        },
      });
  
      return { error: "", success: true };
    } catch (error) {
      return handleError(error);
    }
  }

  export async function deleteBookAction(id: string): Promise<BookStateReturn> {
    try {
      const userId = await getAuthenticatedUserId();
      const existingBook = await getExistingBook(id, userId);
  
      if (existingBook.coverUrl) {
        await deleteFileIfExists(existingBook.coverUrl);
      }
  
      await prisma.book.delete({ where: { id } });
      revalidatePath("/");
  
      return { error: "", success: true };
    } catch (error) {
      return handleError(error);
    }
  }

async function getExistingBook(id: string, userId: string) {
    const book = await prisma.book.findUnique({
      where: { id, userId },
    });
    if (!book) {
      throw new Error("書籍情報が見つかりません。");
    }
    return book;
  }

async function uploadFile(book: File): Promise<string> {
  const fileExt = book.name.split(".").pop();
  const filePath = `${uuidv4()}.${fileExt}`;
  const { error } = await supabase.storage
    .from(URL.SUPABASE_STORAGE_NAME)
    .upload(filePath, book);
  if (error) throw error;
  return filePath;
}

async function deleteFileIfExists(filePath: string): Promise<void> {
    const { error } = await supabase.storage
      .from(URL.SUPABASE_STORAGE_NAME)
      .remove([filePath]);
    if (error) throw error;
  }

async function getAuthenticatedUserId(): Promise<string> {
  const user = await auth();
  if (!user?.userId) {
    throw new Error("ログインが必要です");
  }
  return user.userId;
}

function handleError(error: unknown): BookStateReturn {
  if (error instanceof z.ZodError) {
    return {
      error: error.errors.map((e) => e.message).join(","),
      success: false,
    };
  }
  if (error instanceof Error) {
    return {
      error: error.message,
      success: false,
    };
  }
  return {
    error: "システム異常が発生しました。",
    success: false,
  };
}
