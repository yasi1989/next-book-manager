import { fetchBooks } from "@/features/books/services/book-fetcher";
import BookListPresantational from "./presantaional";

const BookListContainer = async () => {
  const books = await fetchBooks();
  return <BookListPresantational books={books} />;
};

export default BookListContainer;
