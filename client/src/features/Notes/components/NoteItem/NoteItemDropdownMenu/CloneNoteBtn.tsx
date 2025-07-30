import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { APINote } from "@/features/notes/api";
import { useSelectedNoteContext } from "@/features/notes/hooks/context";
import { useNotes } from "@/features/notes/hooks/useNotes";
import { Copy } from "lucide-react";

export function CloneNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const { handleCreateNote, selectNoteTitleInput } = useNotes();

  function handleClick(): void {
    const newNoteTitle = targetNote.title + " - Clone";
    const newNote = handleCreateNote(newNoteTitle, targetNote.content);
    setTimeout(() => setSelectedNote(newNote), 1);
    setTimeout(selectNoteTitleInput, 220);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Copy />
      Clone
    </DropdownMenuItem>
  );
}
