import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Book } from "@prisma/client";
import { Edit } from "lucide-react";
import Image from "next/image"
import Link from "next/link";
import BookDeleteDialog from "../form/BookDeleteDialog";

type BookCardProp = {
  book: Book;
}

const BookCard = ({book}: BookCardProp) => {
  return (
    <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={book.coverUrl || "/noimage.jpg"}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={true}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-1">
        <h3 className="font-semibold text-lg mb-1 truncate">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{book.author}</p>
        <span className={`justify-self-start px-2 py-1 rounded-full text-sm ${
          book.status === "Available" ? "bg-green-100 text-green-800" :
          book.status === "Borrowed" ? "bg-yellow-100 text-yellow-800" :
          "bg-red-100 text-red-800"
        }`}>
          {book.status}
        </span>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end gap-2">
        <Link href={`edit/${book.id}`}>
          <Button
            variant="ghost"
            size="icon"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </Link>
        <BookDeleteDialog id={book.id} />
      </CardFooter>
    </Card>
  )
}

export default BookCard