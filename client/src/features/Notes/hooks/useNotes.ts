import type { NotesActions } from "../types";
import { useNoteEditorRefsContext, useNotesContext } from "../hooks/context";
import type { APINote } from "../api";

export function useNotes(): NotesActions {
  const { notes, setNotes } = useNotesContext();
  const { noteTitleInputRef } = useNoteEditorRefsContext();

  function selectNoteTitleInput(): void {
    noteTitleInputRef?.current?.select();
  }

  function createNote(title: string, content: string = ""): APINote {
    const newNote = {
      user_id: 1,
      id: Math.random() * 1000000,
      title,
      content,
    };
    setNotes([...notes, newNote]);
    return newNote;
  }

  function deleteNote(targetId: number): void {
    const newNotes = notes.filter((note) => note.id !== targetId);
    setNotes([...newNotes]);
  }

  return { selectNoteTitleInput, createNote, deleteNote };
}
