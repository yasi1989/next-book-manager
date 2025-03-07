"use client";
import BookCards from "@/features/books/components/list/BookCards";
import BookList from "@/features/books/components/list/BookList";
import BookSearchError from "@/features/books/components/list/BookSearchError";
import {
  searchQueryAtom,
  viewModeAtom,
} from "@/features/books/stores/book-list-atom";
import { FetchBooksResult } from "@/features/books/types/type";
import { useAtomValue } from "jotai";

type BookListPresantationalProps = {
  result: FetchBooksResult;
};

const BookListPresantational = ({ result }: BookListPresantationalProps) => {
  const viewMode = useAtomValue(viewModeAtom);
  const searchQuery = useAtomValue(searchQueryAtom);
  if (!result.success) {
    return <BookSearchError errorMsg={result.error} />
  }

  const filteredBooks = result.books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return viewMode === "grid" ? <BookCards books={filteredBooks} /> : <BookList books={filteredBooks} />;
};

export default BookListPresantational;
