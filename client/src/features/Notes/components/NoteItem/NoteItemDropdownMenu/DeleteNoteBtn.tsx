import { QUERY_KEYS, type BaseAPIResponse } from "@/api";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteNote, type APINote } from "@/features/notes/api";
import {
  useNotesContext,
  useSelectedNoteContext,
} from "@/features/notes/hooks/context";
import { useMutation } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export function DeleteNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { notes, setNotes } = useNotesContext();
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();

  const { mutate } = useMutation<BaseAPIResponse, Error, number>({
    mutationKey: [QUERY_KEYS.DELETE_NOTE],
    mutationFn: deleteNote,
    onSuccess: () => {
      const newNotes = notes.filter((note) => note.id !== targetNote.id);
      setNotes([...newNotes]);
      if (selectedNote?.id === targetNote.id) {
        setTimeout(() => setSelectedNote(null), 1);
      } else {
        setTimeout(() => setSelectedNote(selectedNote), 1);
      }
    },
    onError: (error) => toast.error(error.message),
  });

  function handleClick(): void {
    mutate(targetNote.id);
  }

  return (
    <DropdownMenuItem variant="destructive" onClick={handleClick}>
      <Trash2 />
      Delete
    </DropdownMenuItem>
  );
}
