import { QUERY_KEYS } from "@/api";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  createNote,
  type APINote,
  type CreateNoteInput,
} from "@/features/notes/api";
import {
  useNotesContext,
  useSelectedNoteContext,
} from "@/features/notes/hooks/context";
import { useNotes } from "@/features/notes/hooks/useNotes";
import { useMutation } from "@tanstack/react-query";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export function CloneNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { notes, setNotes } = useNotesContext();
  const { setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput } = useNotes();

  const { mutate } = useMutation<APINote | null, Error, CreateNoteInput>({
    mutationKey: [QUERY_KEYS.CREATE_NOTE],
    mutationFn: createNote,
    onSuccess: (note) => {
      setNotes([...notes, note as APINote]);
      setSelectedNote(note);
    },
    onError: (error) => toast.error(error.message),
  });

  function handleClick(): void {
    const newNoteTitle = targetNote.title + " - Clone";
    mutate({ title: newNoteTitle, content: targetNote.content });
    setTimeout(selectNoteTitleInput, 220);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Copy />
      Clone
    </DropdownMenuItem>
  );
}
