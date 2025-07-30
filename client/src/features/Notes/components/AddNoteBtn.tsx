import { useNotes } from "../hooks/useNotes";
import { CirclePlus } from "lucide-react";
import { useNotesContext, useSelectedNoteContext } from "../hooks/context";
import { Button } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "../api/Notes";
import type { APINote, CreateNoteInput } from "../api";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/api";

export function AddNoteBtn() {
  const { notes, setNotes } = useNotesContext();
  const { setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput } = useNotes();

  const { mutate, isPending } = useMutation<
    APINote | null,
    Error,
    CreateNoteInput
  >({
    mutationKey: [QUERY_KEYS.CREATE_NOTE],
    mutationFn: createNote,
    onSuccess: (note) => {
      setNotes([...notes, note as APINote]);
      setSelectedNote(note);
    },
    onError: (error) => toast.error(error.message),
  });

  async function handleClick(): Promise<void> {
    mutate({ title: "Untitled", content: "" });
    setTimeout(selectNoteTitleInput, 1);
  }

  return (
    <Button className="min-w-full" onClick={handleClick} disabled={isPending}>
      <CirclePlus />
      Add Note
    </Button>
  );
}
