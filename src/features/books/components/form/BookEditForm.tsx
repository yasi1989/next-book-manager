"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useBookForm } from "@/features/books/hooks/useBookForm";
import FormInput from "@/features/books/components/form/FormInput";
import FormDatePicker from "@/features/books/components/form/FormDatePicker";
import FormFileInput from "@/features/books/components/form/FormFileInput";
import FormSelect from "./FormSelect";
import { Books } from "../../const/const";
import { FetchBookResult } from "../../types/type";
import BookSearchError from "../list/BookSearchError";

type BookEditFormProps = {
  result: FetchBookResult;
}

const BookEditForm = ({result}: BookEditFormProps) => {
  const type = "edit";
  const book = result.success ? result.book : null;
  const {form, onSubmit, isLoading} = useBookForm({type, book});

  return (
    <>
      { result.success ? (
        <div className="grid container mx-auto px-4 py-8 justify-items-center gap-8">
          <h1 className="text-2xl font-bold text-gray-700">Edit Book</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormInput form={form} name="title" label="Title" placeholder="Enter book title" type="text" />
              <FormInput form={form} name="author" label="Author" placeholder="Enter book Author" type="text" />
              <FormSelect form={form} name="status" label="Status" selectItems={Books.STATUS_ITEM} placeholder="Select a verified status to display" />
              <FormDatePicker form={form} name="year" label="Date of publishment" placeholder="Pick a date" />
              <FormFileInput form={form} name="file" label="File" message="Select this only if you’re making changes." />
              <Button type="submit" disabled={isLoading}>Edit Book</Button>
            </form>
          </Form>
        </div>
      ) : (
        <BookSearchError errorMsg={result.error} />
      )}
    </>
  );
};

export default BookEditForm;
