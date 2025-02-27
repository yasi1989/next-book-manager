import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image"
import { Book } from "../types/type";

type BookCardProp = {
  book: Book;
}

const BookCard = ({book}: BookCardProp) => {
  return (
    <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-square w-full">
          <Image
            src={book.coverUrl}
            alt={book.title}
            fill
            className="object-cover"
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
        <Button
          variant="ghost"
          size="icon"
        >
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-red-500">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default BookCard