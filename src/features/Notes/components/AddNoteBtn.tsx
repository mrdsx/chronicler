import { useNotesContext } from "@/providers/NotesProvider";
import { useNotesActions } from "../hooks/useNotesActions";
import { Button } from "@/components/ui/button";

export function AddNoteBtn(): React.ReactElement {
  const { setSelectedNote } = useNotesContext();
  const { createNote } = useNotesActions();

  return (
    <Button
      className="bg-indigo-700 hover:bg-indigo-600"
      onClick={() => {
        const note = createNote("Untitled");
        setSelectedNote(note);
      }}
    >
      + Add Note
    </Button>
  );
}
