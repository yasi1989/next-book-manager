export type FormValue = {
    id: string;
    title: string;
    author: string;
    year: Date;
    status: "Available" | "Borrowed" | "Lost";
    file?: FileList | undefined;
}

export type BookStateReturn = {
    error?: string | undefined;
    success: boolean;
}