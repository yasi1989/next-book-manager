"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useBookForm } from "@/features/books/hooks/useBookForm";
import FormInput from "@/features/books/components/FormInput";
import FormDatePicker from "@/features/books/components/FormDatePicker";
import FormFileInput from "@/features/books/components/FormFileInput";

const BookNewForm = () => {
  const type = "add";
  const {form, onSubmit, isLoading} = useBookForm({type});

  return (
    <div className="grid container mx-auto px-4 py-8 justify-items-center gap-8">
      <h1 className="text-2xl font-bold text-gray-700">Add New Book</h1>
      <FormInput form={form} name="title" label="Title" placeholder="Enter book title" type="texxt" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormInput form={form} name="title" label="Title" placeholder="Enter book title" type="text" />
          <FormInput form={form} name="author" label="Author" placeholder="Enter book Author" type="text" />
          <FormDatePicker form={form} name="year" label="Date of publishment" placeholder="Pick a date" />
          <FormFileInput form={form} name="file" label="File" />
          <Button type="submit" disabled={isLoading}>Add Book</Button>
        </form>
      </Form>
    </div>
  );
};

export default BookNewForm;
