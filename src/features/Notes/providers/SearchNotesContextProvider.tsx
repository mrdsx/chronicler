import { useState, createContext, useContext } from "react";
import type { SearchNotesContextType } from "../types";

const SearchNotesContext = createContext<SearchNotesContextType>(
  {} as SearchNotesContextType,
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

export function useSearchNotesContext() {
  return useContext(SearchNotesContext);
}
