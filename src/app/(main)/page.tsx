import { Button } from "@/components/ui/button";
import SearchBar from "../_components/SearchBar";
import { Grid3X3, List } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto grid">
      <div className="flex justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-700">Book Collections</h1>
        <div className="flex gap-4">
          <SearchBar />
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div>aaa</div>
    </div>
  );
}
