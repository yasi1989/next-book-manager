import BookNav from "@/features/books/components/BookNav";

const BookShelfPresantaional = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <div className="grid container mx-auto gap-8 p-4">
      <BookNav />
      {children}
    </div>
  );
};

export default BookShelfPresantaional;
