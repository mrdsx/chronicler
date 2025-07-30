import { useNotes } from "../hooks/useNotes";
import { CirclePlus } from "lucide-react";
import { useSelectedNoteContext } from "../hooks/context";
import { Button } from "@/components/ui";

export function AddNoteBtn() {
  const { setSelectedNote } = useSelectedNoteContext();
  const { handleCreateNote, selectNoteTitleInput } = useNotes();

  function handleClick(): void {
    const newNote = handleCreateNote("Untitled");
    setSelectedNote(newNote);
    setTimeout(selectNoteTitleInput, 1);
  }

  return (
    <Button className="min-w-full" onClick={handleClick}>
      <CirclePlus />
      Add Note
    </Button>
  );
}
