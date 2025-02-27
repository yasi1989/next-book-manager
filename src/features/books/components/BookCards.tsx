import { Book } from "../types/type";
import BookCard from "./BookCard";

type BookCardsProps = {
    books: Book[];
}

const BookCards = ({books}: BookCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  )
}

export default BookCards