import { useContext } from "react";
import { NoteEditorRefsContext } from "../../providers/NoteEditorRefsContextProvider";

export function useNoteEditorRefsContext() {
  const context = useContext(NoteEditorRefsContext);
  if (context === null) {
    throw new Error(
      "useNoteEditorRefsContext hook must be used inside provider!",
    );
  }

  return context;
}
