import { useNotes } from "../../hooks/useNotes";
import type { Note } from "../../types";
import { useSelectedNoteContext } from "../../providers/SelectedNoteContextProvider";
import { Pencil, Trash2 } from "lucide-react";

interface DropdownMenuItem {
  title: string;
  icon: React.ReactElement;
  variant?: "default" | "destructive";
  onClick(): void;
}

export function useDropdownMenuItems(targetNote: Note): DropdownMenuItem[] {
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput, deleteNote } = useNotes();

  function handleRename(): void {
    setSelectedNote(targetNote);
    setTimeout(selectNoteTitleInput, 210);
  }

  function handleDelete(): void {
    const tempSelectedNote = { ...selectedNote };

    deleteNote(targetNote.id);
    if (selectedNote?.id === targetNote.id) {
      setTimeout(() => setSelectedNote(null), 1);
    } else {
      setTimeout(() => setSelectedNote(tempSelectedNote as Note), 1);
    }
  }

  const dropdownMenuItems: DropdownMenuItem[] = [
    {
      title: "Rename",
      icon: <Pencil />,
      onClick: handleRename,
    },
    {
      title: "Delete",
      icon: <Trash2 />,
      variant: "destructive",
      onClick: handleDelete,
    },
  ];

  return dropdownMenuItems;
}
