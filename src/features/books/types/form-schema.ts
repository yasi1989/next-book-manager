import * as z from "zod";

const MAX_MB = 5;
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024;
const ACCEPTED_IMAGE_TYPE = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const FormSchema = z.object({
  id: z.string(),
  title: z.string().nonempty({ message: "タイトルは必須です。" }),
  author: z.string().nonempty({ message: "筆者は必須です。" }),
  year: z.date({ required_error: "発行年は必須です。" }),
  status: z.enum(["Available", "Borrowed", "Lost"], {
    required_error: "ステータスは必須です。",
  }),
  file: z
    .custom<FileList>()
    .optional()
    .refine(
      (files) => !files || files[0].size <= MAX_FILE_SIZE,
      `画像サイズは${MAX_MB}MBです。`
    )
    .refine(
      (files) => !files || ACCEPTED_IMAGE_TYPE.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png, .webpのファイルのみ利用できます。"
    ),
});

export const AddFormSchema = FormSchema;
export const EditFormSchema = FormSchema.extend({
  id: z.string().nonempty({message: "ID is required for editing."}),
});