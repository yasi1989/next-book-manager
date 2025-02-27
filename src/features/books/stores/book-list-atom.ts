import { atom } from "jotai";

export const searchQueryAtom = atom<string>("");
export const viewModeAtom = atom<"grid" | "list">("grid");