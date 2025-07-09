import { useContext } from "react";
import { SearchNotesContext } from "../../providers";

export function useSearchNotesContext() {
  const context = useContext(SearchNotesContext);
  if (context === null) {
    throw new Error(
      "useSearchNotesContext must be used inside SearchNotesContextProvider!",
    );
  }

  return context;
}
