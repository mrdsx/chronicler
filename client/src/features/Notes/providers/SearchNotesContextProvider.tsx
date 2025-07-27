import { useState, createContext } from "react";
import type { SearchNotesContextType } from "../types";

export const SearchNotesContext = createContext<SearchNotesContextType | null>(
  null,
);

export function SearchNotesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchNotesContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchNotesContext.Provider>
  );
}
