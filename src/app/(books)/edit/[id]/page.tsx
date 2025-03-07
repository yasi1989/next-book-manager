import { Suspense } from "react";
import EditBookContainer from "./_containers/container";
import BookFormSkelton from "@/features/books/components/form/BookFormSkelton";

const EditBookPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<BookFormSkelton />}>
      <EditBookContainer params={params} />
    </Suspense>
  );
};

export default EditBookPage;
