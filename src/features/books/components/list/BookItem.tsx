import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { Book } from "@prisma/client";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookDeleteDialog from "../form/BookDeleteDialog";

type BookItemProps = {
  book: Book;
};

const BookItem = ({ book }: BookItemProps) => {
  return (
    <TableRow key={book.id}>
      <TableCell>
        <Image
          alt={book.title}
          src={book.coverUrl || "/noimage.jpg"}
          width={50}
          height={50}
          className="rounded-md shadow-sm aspect-square"
        />
      </TableCell>
      <TableCell className="font-medium">{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.year.toLocaleString()}</TableCell>
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
      <TableCell className="text-right">
        <Link href={`edit/${book.id}`}>
          <Button
            variant="ghost"
            size="icon"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </Link>
        <BookDeleteDialog id={book.id} />
      </TableCell>
    </TableRow>
  );
};

export default BookItem;
