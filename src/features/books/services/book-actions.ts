"use server";

import { z } from "zod";
import { AddFormSchema, EditFormSchema } from "../types/form-schema";
import { BookStateReturn } from "../types/type";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { URL } from "../const/const";

export async function addBookAction(values: z.infer<typeof AddFormSchema>): Promise<BookStateReturn> {
    try {
        const userId = await auth();

        if (!userId?.userId) {
            return { error: "ログインが必要です", success: false };
        }

        let imagePath: string | undefined = undefined;

        if(values.file) {
            const book = values.file[0];
            const fileExt = book.name.split(".").pop();
            const filePath = `${uuidv4()}.${fileExt}`;
            const { error } = await supabase.storage.from(URL.SUPABASE_STORAGE_NAME).upload(filePath, book);
            if (error) throw error;
            imagePath = filePath;
        }

        await prisma.book.create({
            data: {
                title: values.title,
                author: values.author,
                status: values.status,
                userId: userId.userId,
                year: values.year,
                coverUrl: imagePath,
            }
        });
        return {
            error: "",
            success: true,
        }
    } catch (error) {
        if(error instanceof z.ZodError) {
            return {
                error: error.errors.map((e) => e.message).join(","),
                success: false,
            }
        } 
        if(error instanceof Error) {
            return {
                error: error.message,
                success: false,
            }
        } else {
            return {
                error: "システム異常が発生しました。",
                success: false,
            }
        }
    }
}


export async function editBookAction(values: z.infer<typeof EditFormSchema>): Promise<BookStateReturn> {
    try {
        const user = await auth();

        if (!user?.userId) {
            return { error: "ログインが必要です", success: false };
        }
        const userId = user.userId;

        const existingBook = await prisma.book.findUnique({
            where: {
                id: values.id,
                userId: userId,
            }
        });

        if (!existingBook) {
            return {
                error: "書籍情報が見つかりません。",
                success: false,
            }
        }

        let imagePath: string | undefined = undefined;
        const existingBookUrl = existingBook.coverUrl;

        if(values.file) {
            if(existingBook.coverUrl) {
                const {error: deleteError} = await supabase.storage.from(URL.SUPABASE_STORAGE_NAME).remove([existingBook.coverUrl]);
                if (deleteError) throw deleteError;
            }
            const book = values.file[0];
            const fileExt = book.name.split(".").pop();
            const filePath = `${uuidv4()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from(URL.SUPABASE_STORAGE_NAME).upload(filePath, book);
            if (uploadError) throw uploadError;
            imagePath = filePath;
        }
        await prisma.book.update({
            where: {
                id: values.id,
            },
            data: {
                title: values.title,
                author: values.author,
                status: values.status,
                userId: userId,
                year: values.year,
                coverUrl: imagePath ?? existingBookUrl,
            }
        });
        return {
            error: "",
            success: true,
        }
    } catch (error) {
        if(error instanceof z.ZodError) {
            return {
                error: error.errors.map((e) => e.message).join(","),
                success: false,
            }
        }
        if(error instanceof Error) {
            return {
                error: error.message,
                success: false,
            }
        } else {
            return {
                error: "システム異常が発生しました。",
                success: false,
            }
        }
    }
}

export async function deleteBookAction(id: string): Promise<BookStateReturn> {
    try {
        const user = await auth();

        if (!user?.userId) {
            return { error: "ログインが必要です", success: false };
        }
        const userId = user.userId;

        const existingBook = await prisma.book.findUnique({
            where: {
                id: id,
                userId: userId,
            }
        });

        if (!existingBook) {
            return {
                error: "書籍情報が見つかりません。",
                success: false,
            }
        }

        if(existingBook.coverUrl) {
            const {error: deleteError} = await supabase.storage.from(URL.SUPABASE_STORAGE_NAME).remove([existingBook.coverUrl]);
            if (deleteError) throw deleteError;
        }

        await prisma.book.delete({
            where: {
                id: id,
            },
        });
        revalidatePath("/");
        return {
            error: "",
            success: true,
        }
    } catch (error) {
        if(error instanceof Error) {
            return {
                error: error.message,
                success: false,
            }
        } else {
            return {
                error: "システム異常が発生しました。",
                success: false,
            }
        }
    }
} 