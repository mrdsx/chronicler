import type { NotesActions } from "../types";
import { useNoteEditorRefsContext } from "../hooks/context";

export function useNotes(): NotesActions {
  const { noteTitleInputRef } = useNoteEditorRefsContext();

  function selectNoteTitleInput(): void {
    noteTitleInputRef?.current?.select();
  }

  return { selectNoteTitleInput };
}
