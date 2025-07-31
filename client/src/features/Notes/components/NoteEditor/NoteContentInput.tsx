import { useEffect, useState } from "react";
import { useEditNote } from "../../hooks/useEditNote";
import { useSelectedNoteContext } from "../../hooks/context";
import { useEditNoteMutation } from "../../hooks/useEditNoteMutation";

// TODO: extract duplicated code from NoteContentInput and NoteTitleInput
export function NoteContentInput() {
  const { selectedNote } = useSelectedNoteContext();
  const { editNoteContent } = useEditNote();
  const { mutate } = useEditNoteMutation();

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
    if (!selectedNote) return;

    mutate({ noteId: selectedNote.id, note: { content: noteContentInputVal } });
    editNoteContent(selectedNote, noteContentInputVal);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    if (!selectedNote) return;

    const isSaving =
      e.key === "Enter" || (e.key === "s" && (e.ctrlKey || e.metaKey));
    if (!isSaving) return;

    e.preventDefault();
    editNoteContent(selectedNote, noteContentInputVal);
    mutate({ noteId: selectedNote.id, note: { content: noteContentInputVal } });
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
