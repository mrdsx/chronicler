import { DropdownMenuItem } from "@/components/ui";
import { useSelectedNoteContext } from "@/features/Notes/hooks/context";
import { useNotes } from "@/features/Notes/hooks/useNotes";
import type { Note } from "@/features/Notes/types";
import { Edit } from "lucide-react";

export function RenameNoteBtn({ targetNote }: { targetNote: Note }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput } = useNotes();

  function handleClick(): void {
    setSelectedNote(targetNote);
    setTimeout(selectNoteTitleInput, 210);
  }

  return (
    <DropdownMenuItem
      className="flex cursor-pointer gap-2"
      onClick={handleClick}
    >
      <Edit />
      Rename
    </DropdownMenuItem>
  );
}
