import { Book } from "@prisma/client";

export type FormValue = {
  id: string;
  title: string;
  author: string;
  year: Date;
  status: "Available" | "Borrowed" | "Lost";
  file?: FileList | undefined;
};

export type BookStateReturn = {
  error?: string | undefined;
  success: boolean;
};

export type FetchBooksResult =
  | { success: true; books: Book[] }
  | { success: false; error: string };

export type FetchBookResult =
  | { success: true; book: Book }
  | { success: false; error: string };
