import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useSelectedNoteContext } from "@/features/notes/hooks/context";
import { useNotes } from "@/features/notes/hooks/useNotes";
import type { Note } from "@/features/notes/types";
import { Trash2 } from "lucide-react";

export function DeleteNoteBtn({ targetNote }: { targetNote: Note }) {
  const { deleteNote } = useNotes();
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();

  function handleClick(): void {
    deleteNote(targetNote.id);
    if (selectedNote?.id === targetNote.id) {
      setTimeout(() => setSelectedNote(null), 1);
    } else {
      setTimeout(() => setSelectedNote(selectedNote), 1);
    }
  }

  return (
    <DropdownMenuItem variant="destructive" onClick={handleClick}>
      <Trash2 />
      Delete
    </DropdownMenuItem>
  );
}
