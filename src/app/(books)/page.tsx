import BookListContainer from "./_containers/book-list/container";
import BookShelfPresantaional from "./_containers/book-shelf/presantaional";

export default function Home() {
  return (
    <BookShelfPresantaional>
      <BookListContainer />
    </BookShelfPresantaional>
  );
}
