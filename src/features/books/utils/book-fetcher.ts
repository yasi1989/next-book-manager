import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Book } from "@prisma/client";
import { redirect } from "next/navigation";

export async function fetchBooks(): Promise<Book[]> {
    const { userId } = await auth();

    if (!userId) {
        redirect("sign-in");
    }

    return await prisma.book.findMany({
        where: {
            userId: userId,
        },
    });
}