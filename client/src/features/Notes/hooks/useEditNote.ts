import type { EditNoteActions, Note } from "../types";
import { useNotesContext } from "./context";

export function useEditNote(): EditNoteActions {
  const { notes, setNotes } = useNotesContext();

  function editNoteTitle(targetNote: Note, newNoteTitle: string): void {
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id && newNoteTitle.trim().length > 0) {
        return { ...note, title: newNoteTitle };
      }
      return note;
    });
    setNotes(newNotes);
  }

  function editNoteContent(targetNote: Note, newNoteContent: string): void {
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id) {
        return { ...note, content: newNoteContent };
      }
      return note;
    });
    setNotes(newNotes);
  }

  return { editNoteTitle, editNoteContent };
}
