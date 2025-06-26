import { useNotes } from "../hooks/useNotes";
import { useSelectedNoteContext } from "../providers/SelectedNoteContextProvider";
import { CirclePlus } from "lucide-react";
import { PrimaryButton } from "@/components/custom/PrimaryButton";

export function AddNoteBtn() {
  const { setSelectedNote } = useSelectedNoteContext();
  const { createNote, selectNoteTitleInput } = useNotes();

  return (
    <PrimaryButton
      additionalStyles="min-w-full"
      onClick={() => {
        const newNote = createNote("Untitled");
        setSelectedNote(newNote);
        setTimeout(selectNoteTitleInput, 1);
      }}
    >
      <CirclePlus />
      Add Note
    </PrimaryButton>
  );
}
