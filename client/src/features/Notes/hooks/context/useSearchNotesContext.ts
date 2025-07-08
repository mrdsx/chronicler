import { useContext } from "react";
import { SearchNotesContext } from "../../providers";

export function useSearchNotesContext() {
  const context = useContext(SearchNotesContext);
  if (context === null) {
    throw new Error("useSearchNotesContext hook must be used inside provider!");
  }

  return context;
}
