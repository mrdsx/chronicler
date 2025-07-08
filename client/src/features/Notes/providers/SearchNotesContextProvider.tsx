import { useState, createContext, type PropsWithChildren } from "react";
import type { SearchNotesContextType } from "../types";

export const SearchNotesContext = createContext<SearchNotesContextType | null>(
  null,
);

export function SearchNotesContextProvider({
  children,
}: PropsWithChildren) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <SearchNotesContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchNotesContext.Provider>
  );
}
