"use client"

import BookCards from "@/features/books/components/list/BookCards";
import BookList from "@/features/books/components/list/BookList";
import { searchQueryAtom, viewModeAtom } from "@/features/books/stores/book-list-atom";
import { Book } from "@prisma/client";
import { useAtomValue } from "jotai";

type BookListPresantationalProps = {
  books: Book[];
}

const BookListPresantational = ({books} : BookListPresantationalProps) => {
  const viewMode = useAtomValue(viewModeAtom);
  const searchQuery = useAtomValue(searchQueryAtom);
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return viewMode === "grid" ? <BookCards books={filteredBooks} /> : <BookList books={filteredBooks} />
};

export default BookListPresantational;
