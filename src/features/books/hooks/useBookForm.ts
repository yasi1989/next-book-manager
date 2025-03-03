import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Book } from "@prisma/client";
import { AddFormSchema, EditFormSchema } from "../types/form-schema";
import { addBookAction, editBookAction } from "../services/book-actions";

type UseFormProps = {
  type: "add" | "edit";
  book?: Book | null;
}

const bookActions = {
  add: addBookAction,
  edit: editBookAction,
}

export const useBookForm = ({type, book}: UseFormProps) => {
  const [isLoading, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof AddFormSchema | typeof EditFormSchema>) => {
    startTransition(async() => {
      const {error, success} = await bookActions[type](values);
      console.log(success);
      console.log(error);
    });
  };

  const form = useForm<z.infer<typeof AddFormSchema | typeof EditFormSchema>>({
    resolver: zodResolver(type === "add" ? AddFormSchema : EditFormSchema),
    defaultValues: book ? {
      id: type === "edit" ? book.id : "",
      title: book.title,
      author: book.author,
      year: book.year,
      status: book.status as "Available" | "Borrowed" | "Lost",
      file: undefined,
    } : {
      id: "",
      title: "",
      author: "",
      year: undefined,
      status: "Available",
      file: undefined,
    },
  });

  return {isLoading, onSubmit, form}
}