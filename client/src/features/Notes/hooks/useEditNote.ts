import type { APINote } from "../api";
import type { EditNoteActions } from "../types";
import { useNotesContext, useSelectedNoteContext } from "./context";

export function useEditNote(): EditNoteActions {
  const { notes, setNotes } = useNotesContext();
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();

  function editNoteTitle(targetNote: APINote, newNoteTitle: string): void {
    if (newNoteTitle.trim().length === 0) return;

    setSelectedNote({ ...(selectedNote as APINote), title: newNoteTitle });
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id) {
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
