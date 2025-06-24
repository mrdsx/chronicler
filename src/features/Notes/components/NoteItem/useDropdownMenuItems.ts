import { useNotes } from "../../hooks/useNotes";
import type { Note } from "../../types";
import { useSelectedNoteContext } from "../../providers/SelectedNoteContextProvider";

interface DropdownMenuItem {
  title: string;
  variant?: "default" | "destructive";
  onClick(): void;
}

export function useDropdownMenuItems(targetNote: Note): DropdownMenuItem[] {
  const { setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput, deleteNote } = useNotes();

  function handleRename(): void {
    setSelectedNote(targetNote);
    setTimeout(selectNoteTitleInput, 210);
  }

  function handleDelete(): void {
    deleteNote(targetNote.id);
    setTimeout(() => setSelectedNote(null), 1);
  }

  const dropdownMenuItems: DropdownMenuItem[] = [
    {
      title: "Rename",
      onClick: handleRename,
    },
    {
      title: "Delete",
      variant: "destructive",
      onClick: handleDelete,
    },
  ];

  return dropdownMenuItems;
}
