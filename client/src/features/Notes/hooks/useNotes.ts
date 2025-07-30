import type { NotesActions } from "../types";
import { useNoteEditorRefsContext, useNotesContext } from "../hooks/context";

export function useNotes(): NotesActions {
  const { notes, setNotes } = useNotesContext();
  const { noteTitleInputRef } = useNoteEditorRefsContext();

  function selectNoteTitleInput(): void {
    noteTitleInputRef?.current?.select();
  }

  // TODO: add actual deleting with sending request
  function deleteNote(targetId: number): void {
    const newNotes = notes.filter((note) => note.id !== targetId);
    setNotes([...newNotes]);
  }

  return { selectNoteTitleInput, deleteNote };
}
