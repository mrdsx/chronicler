import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { type APINote } from "@/features/notes/api";
import {
  useCreateNoteMutation,
  useNoteTitleInputRef,
} from "@/features/notes/hooks";
import { Copy } from "lucide-react";

export function CloneNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { mutate } = useCreateNoteMutation();
  const noteTitleInputRef = useNoteTitleInputRef();

  function handleClick(): void {
    const newNoteTitle = targetNote.title + " - Clone";
    mutate({ title: newNoteTitle, content: targetNote.content });
    setTimeout(() => noteTitleInputRef.current?.select(), 220);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Copy />
      Clone
    </DropdownMenuItem>
  );
}
