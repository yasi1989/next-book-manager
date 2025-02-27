"use client"

import BookCards from "@/features/books/components/BookCards";
import BookList from "@/features/books/components/BookList";
import { searchQueryAtom, viewModeAtom } from "@/features/books/stores/book-list-atom";
import { Book } from "@/features/books/types/type";
import { useAtomValue } from "jotai";

const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    status: "Available",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "4",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "6",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "7",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "8",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "9",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "10",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "11",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "12",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "13",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    status: "Borrowed",
    coverUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
  },
];

const BookListPresantational = () => {
  const viewMode = useAtomValue(viewModeAtom);
  const searchQuery = useAtomValue(searchQueryAtom);
  const filteredBooks = mockBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return viewMode === "grid" ? <BookCards books={filteredBooks} /> : <BookList books={filteredBooks} />
};

export default BookListPresantational;
