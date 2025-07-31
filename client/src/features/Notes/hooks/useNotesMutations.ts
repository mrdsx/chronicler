import { QUERY_KEYS, type BaseAPIResponse } from "@/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createNote,
  deleteNote,
  editNote,
  type APINote,
  type CreateNoteInput,
  type EditNoteProps,
} from "../api";
import { useNotesContext, useSelectedNoteContext } from "./context";

export function useCreateNoteMutation() {
  const { notes, setNotes } = useNotesContext();
  const { setSelectedNote } = useSelectedNoteContext();

  // TODO: remove null
  const mutation = useMutation<APINote | null, Error, CreateNoteInput>({
    mutationKey: [QUERY_KEYS.CREATE_NOTE],
    mutationFn: createNote,
    onSuccess: (note) => {
      setNotes([...notes, note as APINote]);
      setSelectedNote(note);
    },
    onError: (error) => toast.error(error.message),
  });

  return { ...mutation };
}

export function useDeleteNoteMutation(targetNote: APINote) {
  const { notes, setNotes } = useNotesContext();
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();

  const mutation = useMutation<BaseAPIResponse, Error, number>({
    mutationKey: [QUERY_KEYS.DELETE_NOTE],
    mutationFn: deleteNote,
    onSuccess: () => {
      const newNotes = notes.filter((note) => note.id !== targetNote.id);
      setNotes([...newNotes]);
      if (selectedNote?.id === targetNote.id) {
        setSelectedNote(null);
      } else {
        setSelectedNote(selectedNote);
      }
    },
    onError: (error) => toast.error(error.message),
  });

  return { ...mutation };
}

export function useEditNoteMutation() {
  const mutation = useMutation<APINote, Error, EditNoteProps>({
    mutationKey: [QUERY_KEYS.EDIT_NOTE],
    mutationFn: editNote,
    onError: (error) => toast.error(error.message),
  });

  return { ...mutation };
}
