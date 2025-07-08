import { useContext } from "react";
import { SearchNotesContext } from "../../providers/SearchNotesContextProvider";

export function useSearchNotesContext() {
  const context = useContext(SearchNotesContext);
  if (context === null) {
    throw new Error("useSearchNotesContext hook must be used inside provider!");
  }

  return context;
}
