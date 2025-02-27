import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Book } from "../types/type";

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  return (
    <TableRow key={book.id}>
      <TableCell>
        <Image
          alt={book.title}
          src={book.coverUrl}
          width={50}
          height={50}
          className="rounded-md shadow-sm"
        />
      </TableCell>
      <TableCell className="font-medium">{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.year}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            book.status === "Available"
              ? "bg-green-100 text-green-800"
              : book.status === "Borrowed"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {book.status}
        </span>
      </TableCell>
    </TableRow>
  );
};

export default BookItem;
