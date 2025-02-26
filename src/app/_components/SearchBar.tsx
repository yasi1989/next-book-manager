import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 h-4 -translate-y-1/2 text-gray-500" />
      <Input
        className="pl-10"
        placeholder="Search books..."
        // onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
