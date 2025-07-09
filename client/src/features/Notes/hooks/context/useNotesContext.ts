import { useContext } from "react";
import { NotesContext } from "../../providers";

export function useNotesContext() {
  const context = useContext(NotesContext);
  if (context === null) {
    throw new Error(
      "useNotesContext must be used inside NotesContextProvider!",
    );
  }

  return context;
}
