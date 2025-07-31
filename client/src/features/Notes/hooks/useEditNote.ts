import type { APINote } from "../api";
import type { EditNoteActions } from "../types";
import { useNotesContext, useSelectedNoteContext } from "./context";
import { useEditNoteMutation } from "./useEditNoteMutation";

export function useEditNote(): EditNoteActions {
  const { notes, setNotes } = useNotesContext();
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();
  const { mutate } = useEditNoteMutation();

  function editNoteContent(targetNote: APINote, newNoteContent: string): void {
    const newNotes = notes.map((note) => {
      if (note.id === targetNote.id) {
        return { ...note, content: newNoteContent };
      }
      return note;
    });
    setNotes([...newNotes]);
  }

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

  function handleEditNoteContent(content: string): void {
    if (!selectedNote) return;

    mutate({ noteId: selectedNote.id, note: { content } });
    editNoteContent(selectedNote, content);
  }

  function handleEditNoteTitle(title: string, setTitle: Function): void {
    if (selectedNote === null) return;

    if (title.length === 0) {
      setTitle(selectedNote.title);
      return;
    }

    editNoteTitle(selectedNote, title);
    mutate({
      noteId: selectedNote.id,
      note: { title },
    });
  }

  return { handleEditNoteContent, handleEditNoteTitle };
}
