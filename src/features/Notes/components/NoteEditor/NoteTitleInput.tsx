import { useState, useEffect } from "react";
import { useNotesContext } from "@/features/Notes/providers/NotesContextProvider";
import { useSelectedNoteContext } from "../../providers/SelectedNoteContextProvider";
import { useEditNote } from "../../hooks/useEditNote";

export function NoteTitleInput() {
  const { noteTitleInputRef } = useNotesContext();
  const { selectedNote } = useSelectedNoteContext();
  const { editNoteTitle } = useEditNote();

  const [noteTitleInputVal, setNoteTitleInputVal] = useState<string>("");

  useEffect(() => {
    if (selectedNote) setNoteTitleInputVal(selectedNote.title);
  }, [selectedNote?.id]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNoteTitleInputVal(e.target.value);
  }

  function handleBlur(): void {
    if (selectedNote) editNoteTitle(selectedNote, noteTitleInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (!selectedNote) return;

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
