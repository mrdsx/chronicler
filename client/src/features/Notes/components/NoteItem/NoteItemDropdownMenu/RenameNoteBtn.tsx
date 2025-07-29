import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useSelectedNoteContext } from "@/features/notes/hooks/context";
import { useNotes } from "@/features/notes/hooks/useNotes";
import type { Note } from "@/features/notes/types";
import { Edit } from "lucide-react";

export function RenameNoteBtn({ targetNote }: { targetNote: Note }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput } = useNotes();

  function handleClick(): void {
    setSelectedNote(targetNote);
    setTimeout(selectNoteTitleInput, 210);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Edit />
      Rename
    </DropdownMenuItem>
  );
}
