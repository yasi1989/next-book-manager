"use client";
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";
import SearchBar from "./SearchBar";
import { useAtom } from "jotai";
import { viewModeAtom } from "../stores/book-list-atom";

const BookNav = () => {
  const [viewMode, setViewMode] = useAtom(viewModeAtom);

  return (
    <div className="grid grid-cols-[1fr_auto] gap-4">
      <SearchBar />
      <div className="grid grid-flow-col gap-2">
        <Button variant="outline" size="icon" onClick={() => setViewMode("grid")} >
          <Grid3X3 className={`h-4 w-4 ${viewMode === "grid" ? "bg-green-600 text-white" : ""}`}/>
        </Button>
        <Button variant="outline" size="icon" onClick={() => setViewMode("list")} >
          <List className={`h-4 w-4 ${viewMode === "list" ? "bg-green-600 text-white" : ""}`}/>
        </Button>
      </div>
    </div>
  )
}

export default BookNav