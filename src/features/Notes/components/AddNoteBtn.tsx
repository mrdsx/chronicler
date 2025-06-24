import { useNotes } from "../hooks/useNotes";
import { Button } from "@/components/ui/button";
import { useSelectedNoteContext } from "../providers/SelectedNoteContextProvider";

export function AddNoteBtn() {
  const { setSelectedNote } = useSelectedNoteContext();
  const { createNote, selectNoteTitleInput } = useNotes();

  return (
    <Button
      className="bg-indigo-700 text-white hover:bg-indigo-600"
      onClick={() => {
        const note = createNote("Untitled");
        setSelectedNote(note);
        setTimeout(selectNoteTitleInput, 1);
      }}
    >
      + Add Note
    </Button>
  );
}
