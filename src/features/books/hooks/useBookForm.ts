import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Book } from "@prisma/client";
import { AddFormSchema, EditFormSchema } from "../types/form-schema";
import { addBookAction, editBookAction } from "../services/book-actions";
import { toast } from "sonner";

type UseFormProps = {
  type: "add" | "edit";
  book?: Book | null;
};

const bookActions = {
  add: addBookAction,
  edit: editBookAction,
};

export const useBookForm = ({ type, book }: UseFormProps) => {
  const [isLoading, startTransition] = useTransition();

  const onSubmit = (
    values: z.infer<typeof AddFormSchema | typeof EditFormSchema>
  ) => {
    startTransition(async () => {
      try {
        const { error, success } = await bookActions[type](values);
        if (success) {
          toast.success("正常に処理されました。");
        } else {
          toast.error(`エラーが発生しました：${error}`)
        }
      } catch (error) {
        if(error instanceof Error) {
          toast.error(`予期せぬエラーが発生しました：${error}`)
        } else {
          toast.error("システムエラーが発生しました");
        }
      }
    });
  };

  const form = useForm<z.infer<typeof AddFormSchema | typeof EditFormSchema>>({
    resolver: zodResolver(type === "add" ? AddFormSchema : EditFormSchema),
    defaultValues: book
      ? {
          id: type === "edit" ? book.id : "",
          title: book.title,
          author: book.author,
          year: book.year,
          status: book.status as "Available" | "Borrowed" | "Lost",
          file: undefined,
        }
      : {
          id: "",
          title: "",
          author: "",
          year: undefined,
          status: "Available",
          file: undefined,
        },
  });

  return { isLoading, onSubmit, form };
};
