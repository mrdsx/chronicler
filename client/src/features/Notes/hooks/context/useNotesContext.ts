import { useContext } from "react";
import { NotesContext } from "../../providers";

export function useNotesContext() {
  const context = useContext(NotesContext);
  if (context === null) {
    throw new Error("useNotesContext hook must be used inside provider!");
  }

  return context;
}
