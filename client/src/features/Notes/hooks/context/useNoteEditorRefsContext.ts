import { useContext } from "react";
import { NoteEditorRefsContext } from "../../providers";

export function useNoteEditorRefsContext() {
  const context = useContext(NoteEditorRefsContext);
  if (context === null) {
    throw new Error(
      "useNoteEditorRefsContext must be used inside NoteEditorRefsContextProvider!",
    );
  }

  return context;
}
