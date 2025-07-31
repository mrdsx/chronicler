import { useEffect, useState } from "react";
import { useEditNote, useSelectedNoteContext } from "@/features/notes/hooks";

export function useNoteTitleInputActions() {
  const { selectedNote } = useSelectedNoteContext();
  const { handleEditNoteTitle } = useEditNote();

  const [noteTitleInputVal, setNoteTitleInputVal] = useState<string>(
    selectedNote!.title,
  );

  useEffect(() => {
    if (selectedNote) setNoteTitleInputVal(selectedNote.title);
  }, [selectedNote?.id]);

  function handleBlur(): void {
    handleEditNoteTitle(noteTitleInputVal, setNoteTitleInputVal);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNoteTitleInputVal(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    const isSaving =
      e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey));
    if (!isSaving) return;

    e.preventDefault();
    handleEditNoteTitle(noteTitleInputVal, setNoteTitleInputVal);
    e.currentTarget.blur();
  }

  return { handleBlur, handleChange, handleKeyDown, noteTitleInputVal };
}
