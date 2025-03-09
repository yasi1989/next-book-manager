import { Input } from "@/components/ui/input";
import { useSetAtom } from "jotai";
import { Search } from "lucide-react";
import { searchQueryAtom } from "../../stores/book-list-atom";

const SearchBar = () => {
  const setSearchQuery = useSetAtom(searchQueryAtom);
  return (
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 h-4 -translate-y-1/2 text-gray-500" />
      <Input
        className="pl-10"
        placeholder="Search books..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
