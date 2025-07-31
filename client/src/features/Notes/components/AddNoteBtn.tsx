import { CirclePlus } from "lucide-react";
import { useNotesContext, useSelectedNoteContext } from "../hooks/context";
import { Button } from "@/components/ui";
import { useMutation } from "@tanstack/react-query";
import { createNote, type APINote, type CreateNoteInput } from "../api";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/api";
import { useNoteTitleInputRef } from "../hooks/useNoteTitleInputRef";

export function AddNoteBtn() {
  const { notes, setNotes } = useNotesContext();
  const { setSelectedNote } = useSelectedNoteContext();
  const noteTitleInputRef = useNoteTitleInputRef();

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

  function handleClick(): void {
    mutate({ title: "Untitled", content: "" });
    setTimeout(() => noteTitleInputRef.current?.select(), 1);
  }

  return (
    <Button className="min-w-full" onClick={handleClick} disabled={isPending}>
      <CirclePlus />
      Add Note
    </Button>
  );
}
