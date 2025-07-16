import { DropdownMenuItem } from "@/components/ui";
import { useSelectedNoteContext } from "@/features/Notes/hooks/context";
import { useNotes } from "@/features/Notes/hooks/useNotes";
import type { Note } from "@/features/Notes/types";
import { Copy } from "lucide-react";

export function CloneNoteBtn({ targetNote }: { targetNote: Note }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const { createNote, selectNoteTitleInput } = useNotes();

  function handleClick(): void {
    const newNoteTitle = targetNote.title + " - Clone";
    const newNote = createNote(newNoteTitle, targetNote.content);
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
