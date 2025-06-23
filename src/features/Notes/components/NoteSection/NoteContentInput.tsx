import { useEffect, useState } from "react";
import { useEditNote } from "../../hooks/useEditNote";
import { useNotesContext } from "@/providers/NotesProvider";

export function NoteContentInput(): React.ReactElement {
  const { selectedNote } = useNotesContext();
  const { editNoteContent } = useEditNote();

  const [noteContentInputVal, setNoteContentInputVal] = useState<string>(
    selectedNote!.content,
  );

  useEffect(() => {
    setNoteContentInputVal(selectedNote!.content);
  }, [selectedNote!.id]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setNoteContentInputVal(e.target.value);
  }

  function handleBlur(): void {
    editNoteContent(selectedNote, noteContentInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    // TODO: new line on "Enter"
    if (e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey))) {
      e.preventDefault();
      editNoteContent(selectedNote, noteContentInputVal);
    }
  }

  return (
    <textarea
      className="h-full resize-none outline-0"
      value={noteContentInputVal}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
}
