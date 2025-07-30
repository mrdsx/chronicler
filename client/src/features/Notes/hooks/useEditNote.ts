import type { APINote } from "../api";
import type { EditNoteActions } from "../types";
import { useNotesContext } from "./context";

export function useEditNote(): EditNoteActions {
  const { notes, setNotes } = useNotesContext();

  function editNoteTitle(targetNote: APINote, newNoteTitle: string): void {
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id && newNoteTitle.trim().length > 0) {
        return { ...note, title: newNoteTitle };
      }
      return note;
    });
    setNotes([...newNotes]);
  }

  function editNoteContent(targetNote: APINote, newNoteContent: string): void {
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id) {
        return { ...note, content: newNoteContent };
      }
      return note;
    });
    setNotes([...newNotes]);
  }

  return { editNoteTitle, editNoteContent };
}
