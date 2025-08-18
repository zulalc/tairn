import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

function NavSearch() {
  return (
    <div className="relative max-w-xs">
      <Input
        type="search"
        placeholder="Find a bookclub..."
        className="pr-10 dark:bg-muted"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export default NavSearch;
