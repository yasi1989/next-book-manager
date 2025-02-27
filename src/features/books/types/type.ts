export type Book = {
    id: string;
    title: string;
    author: string;
    year: string;
    status: "Available" | "Borrowed" | "Lost";
    coverUrl: string;
  };