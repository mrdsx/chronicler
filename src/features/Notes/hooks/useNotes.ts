import { useNotesContext } from "../providers/NotesContextProvider";
import { v4 as uuidv4 } from "uuid";
import type { Note } from "../types";

type NotesActionsReturnType = {
  selectNoteTitleInput(): void;
  createNote(title: string, content?: string): Note;
  deleteNote(targetId: string): void;
};

export function useNotes(): NotesActionsReturnType {
  const { noteTitleInputRef, notes, setNotes } = useNotesContext();

  function selectNoteTitleInput(): void {
    noteTitleInputRef?.current?.select();
  }

  function createNote(title: string, content: string = ""): Note {
    const newNote = {
      id: uuidv4(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
    return newNote;
  }

  function deleteNote(targetId: string): void {
    const newNotes = notes.filter((note) => note.id !== targetId);
    setNotes([...newNotes]);
  }

  return { selectNoteTitleInput, createNote, deleteNote };
}
