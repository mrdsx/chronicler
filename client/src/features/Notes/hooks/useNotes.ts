import type { NotesActions } from "../types";
import { useNoteEditorRefsContext, useNotesContext } from "../hooks/context";
import type { APINote } from "../api";

export function useNotes(): NotesActions {
  const { notes, setNotes } = useNotesContext();
  const { noteTitleInputRef } = useNoteEditorRefsContext();

  function selectNoteTitleInput(): void {
    noteTitleInputRef?.current?.select();
  }

  // TODO: add actual sending request
  function handleCreateNote(title: string, content: string = ""): APINote {
    const newNote = {
      user_id: 1,
      id: Math.floor(Math.random() * 1000000),
      title,
      content,
    };
    setNotes([...notes, newNote]);
    return newNote;
  }

  // TODO: add actual deleting with sending request
  function deleteNote(targetId: number): void {
    const newNotes = notes.filter((note) => note.id !== targetId);
    setNotes([...newNotes]);
  }

  return { selectNoteTitleInput, handleCreateNote, deleteNote };
}
