import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { auth } from "@clerk/nextjs/server";
import { Book } from "@prisma/client";
import { redirect } from "next/navigation";

export async function fetchBooks(): Promise<Book[]> {
  const { userId } = await auth();

  if (!userId) {
    redirect("sign-in");
  }

  const books = await prisma.book.findMany({
    where: {
      userId: userId,
    },
  });

  const bookWithImageUrl = await Promise.all(
    books.map((book) => {
      let imageUrl: string | null = null;
      if (book.coverUrl) {
        const { data } = supabase.storage
          .from("book-manager")
          .getPublicUrl(book.coverUrl);
        imageUrl = data.publicUrl;
      }

      return {
        ...book,
        coverUrl: imageUrl,
      };
    })
  );

  return bookWithImageUrl;
}

export async function fetchBookById(id: string): Promise<Book | null> {
  const { userId } = await auth();

  if (!userId) {
    redirect("sign-in");
  }

  const book = await prisma.book.findUnique({
    where: {
      id: id,
      userId: userId,
    },
  });

  if (book?.coverUrl) {
    const imageUrl = supabase.storage.from("book-manager").getPublicUrl(book.coverUrl).data.publicUrl;
    return {
      ...book,
      coverUrl: imageUrl,
    }
  };
  return book;
}
