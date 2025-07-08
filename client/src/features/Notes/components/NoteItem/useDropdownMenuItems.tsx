import { useSelectedNoteContext } from "../../hooks/context";
import { useNotes } from "../../hooks/useNotes";
import type { Note } from "../../types";
import { Copy, Pencil, Trash2 } from "lucide-react";

interface DropdownMenuItem {
  title: string;
  icon: React.ReactElement;
  variant: "default" | "destructive";
  onClick(): void;
}

export function useDropdownMenuItems(targetNote: Note): DropdownMenuItem[] {
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();
  const { selectNoteTitleInput, createNote, deleteNote } = useNotes();

  function handleClone(): void {
    const newNoteTitle = targetNote.title + " - Clone";
    const newNote = createNote(newNoteTitle, targetNote.content);
    setTimeout(() => setSelectedNote(newNote), 1);
    setTimeout(selectNoteTitleInput, 220);
  }

  function handleRename(): void {
    setSelectedNote(targetNote);
    setTimeout(selectNoteTitleInput, 210);
  }

  // if user deletes selected note
  // we deselect it to hide its content
  // otherwise user will see the content of deleted note
  function handleDelete(): void {
    deleteNote(targetNote.id);
    if (selectedNote?.id === targetNote.id) {
      setTimeout(() => setSelectedNote(null), 1);
    } else {
      setTimeout(() => setSelectedNote(selectedNote), 1);
    }
  }

  const dropdownMenuItems: DropdownMenuItem[] = [
    {
      title: "Clone",
      variant: "default",
      icon: <Copy />,
      onClick: handleClone,
    },
    {
      title: "Rename",
      variant: "default",
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
