import { useEffect, useState } from "react";
import { useSelectedNoteContext } from "../../hooks/context";
import { useEditNote } from "../../hooks/useEditNote";

export function useNoteContentInputActions() {
  let timer: NodeJS.Timeout;

  const { selectedNote } = useSelectedNoteContext();
  const { handleEditNoteContent } = useEditNote();

  const [noteContentInputVal, setNoteContentInputVal] = useState<string>(
    selectedNote!.content,
  );

  useEffect(() => {
    if (selectedNote) setNoteContentInputVal(selectedNote.content);

    return () => handleEditNoteContent(noteContentInputVal);
  }, [selectedNote?.id]);

  function handleBlur(): void {
    handleEditNoteContent(noteContentInputVal);
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNoteContentInputVal(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    const isSaving = e.key === "s" && (e.ctrlKey || e.metaKey);
    if (!isSaving) return;

    e.preventDefault();
    handleEditNoteContent(noteContentInputVal);
  }

  function handleKeyPress(): void {
    clearTimeout(timer);
  }

  function handleKeyUp(): void {
    clearTimeout(timer);
    timer = setTimeout(() => handleEditNoteContent(noteContentInputVal), 1000);
  }

  return {
    handleBlur,
    handleChange,
    handleKeyDown,
    handleKeyPress,
    handleKeyUp,
    noteContentInputVal,
  };
}
