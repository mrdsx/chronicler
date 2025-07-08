import { useEffect, useState } from "react";
import { useEditNote } from "../../hooks/useEditNote";
import { useSelectedNoteContext } from "../../hooks/context";

export function NoteContentInput() {
  const { selectedNote } = useSelectedNoteContext();
  const { editNoteContent } = useEditNote();

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
    if (selectedNote) editNoteContent(selectedNote, noteContentInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    if (!selectedNote) return;

    if (e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey))) {
      e.preventDefault();
      editNoteContent(selectedNote, noteContentInputVal);
    }
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
