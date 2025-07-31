import { useEffect, useState } from "react";
import { useEditNote } from "../../hooks/useEditNote";
import { useSelectedNoteContext } from "../../hooks/context";

// TODO: extract duplicated code from NoteContentInput and NoteTitleInput
export function NoteContentInput() {
  const { selectedNote } = useSelectedNoteContext();
  const { handleEditNoteContent } = useEditNote();

  const [noteContentInputVal, setNoteContentInputVal] = useState<string>(
    selectedNote!.content,
  );

  useEffect(() => {
    if (selectedNote) setNoteContentInputVal(selectedNote.content);
  }, [selectedNote?.id]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNoteContentInputVal(e.target.value);
  }

  function handleBlur(): void {
    handleEditNoteContent(noteContentInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    const isSaving =
      e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey));
    if (!isSaving) return;

    e.preventDefault();
    handleEditNoteContent(noteContentInputVal);
  }

  return (
    <textarea
      className="h-full resize-none scroll-smooth outline-0"
      value={noteContentInputVal}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}
