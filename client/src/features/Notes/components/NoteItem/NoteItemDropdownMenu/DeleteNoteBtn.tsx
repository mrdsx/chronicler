import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { type APINote } from "@/features/notes/api";
import { useDeleteNoteMutation } from "@/features/notes/hooks/useNotesMutations";
import { Trash2 } from "lucide-react";

export function DeleteNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { mutate } = useDeleteNoteMutation(targetNote);

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
