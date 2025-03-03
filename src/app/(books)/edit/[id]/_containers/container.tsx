import BookEditForm from "@/features/books/components/form/BookEditForm";
import { fetchBookById } from "@/features/books/services/book-fetcher";

const EditBookContainer = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const book = await fetchBookById(id);
  return <BookEditForm book={book} />;
};

export default EditBookContainer;
