import BookEditForm from "@/features/books/components/form/BookEditForm";
import { fetchBookById } from "@/features/books/utils/book-fetcher";

const EditBookContainer = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const result = await fetchBookById(id);
  return <BookEditForm result={result} />;
};

export default EditBookContainer;
