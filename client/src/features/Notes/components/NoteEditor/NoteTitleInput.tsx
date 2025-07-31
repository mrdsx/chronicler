import { useState, useEffect } from "react";
import { useEditNote } from "../../hooks/useEditNote";
import {
  useNoteEditorRefsContext,
  useSelectedNoteContext,
} from "../../hooks/context";

export function NoteTitleInput() {
  const { noteTitleInputRef } = useNoteEditorRefsContext();
  const { selectedNote } = useSelectedNoteContext();
  const { handleEditNoteTitle } = useEditNote();

  const [noteTitleInputVal, setNoteTitleInputVal] = useState<string>(
    selectedNote!.title,
  );

  useEffect(() => {
    if (selectedNote) setNoteTitleInputVal(selectedNote.title);
  }, [selectedNote?.id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNoteTitleInputVal(e.target.value);
  }

  function handleBlur(): void {
    handleEditNoteTitle(noteTitleInputVal, setNoteTitleInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    const isSaving =
      e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey));
    if (!isSaving) return;

    e.preventDefault();
    handleEditNoteTitle(noteTitleInputVal, setNoteTitleInputVal);
    e.currentTarget.blur();
  }

  return (
    <input
      className="text-2xl font-semibold outline-0"
      type="text"
      value={noteTitleInputVal}
      ref={noteTitleInputRef}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}
