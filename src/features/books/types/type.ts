export type FormValue = {
    title: string;
    author: string;
    year: Date;
    status: "Available" | "Borrowed" | "Lost";
    file?: FileList | undefined;
}