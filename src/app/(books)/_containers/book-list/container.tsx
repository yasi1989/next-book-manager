import { fetchBooks } from "@/features/books/utils/book-fetcher";
import BookListPresantational from "./presantaional";

const BookListContainer = async () => {
  const result = await fetchBooks();
  return <BookListPresantational result={result} />
};

export default BookListContainer;
