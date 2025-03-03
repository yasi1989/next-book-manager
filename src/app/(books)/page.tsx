import { Suspense } from "react";
import BookListContainer from "./_containers/book-list/container";
import BookShelfPresantaional from "./_containers/book-shelf/presantaional";
import BookCardsSkelton from "@/features/books/components/list/BookCardsSkelton";

export default function Home() {
  return (
    <BookShelfPresantaional>
      <Suspense fallback={<BookCardsSkelton />}>
        <BookListContainer />
      </Suspense>
    </BookShelfPresantaional>
  );
}
