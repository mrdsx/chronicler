import { useState, useEffect } from "react";
import { useNotesContext } from "@/providers/NotesProvider";
import { useEditNote } from "../../hooks/useEditNote";

export function NoteTitleInput(): React.ReactElement {
  const { selectedNote, noteTitleInputRef } = useNotesContext();
  const { editNoteTitle } = useEditNote();

  const [noteTitleInputVal, setNoteTitleInputVal] = useState<string>(
    selectedNote!.title,
  );

  useEffect(() => {
    setNoteTitleInputVal(selectedNote!.title);
  }, [selectedNote!.id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNoteTitleInputVal(e.target.value);
  }

  function handleBlur(): void {
    editNoteTitle(selectedNote, noteTitleInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey))) {
      e.preventDefault();
      editNoteTitle(selectedNote, noteTitleInputVal);
      e.currentTarget.blur();
    }
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
