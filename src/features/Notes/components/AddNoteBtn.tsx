import { useNotes } from "../hooks/useNotes";
import { Button } from "@/components/ui/button";
import { useSelectedNoteContext } from "../providers/SelectedNoteContextProvider";
import { CirclePlus } from "lucide-react";

export function AddNoteBtn() {
  const { setSelectedNote } = useSelectedNoteContext();
  const { createNote, selectNoteTitleInput } = useNotes();

  return (
    <Button
      className="min-w-full bg-indigo-700 text-white hover:bg-indigo-800"
      onClick={() => {
        const newNote = createNote("Untitled");
        setSelectedNote(newNote);
        setTimeout(selectNoteTitleInput, 1);
      }}
    >
      <CirclePlus />
      Add Note
    </Button>
  );
}
