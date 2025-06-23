import { useNotesContext, type Note } from "@/providers/NotesProvider";
import { NoteItemDropdownMenu } from "./NoteItemDropdownMenu";
import { createRef } from "react";

interface Props {
  note: Note;
}

export function NoteItem(props: Props): React.ReactElement {
  const { note } = props;
  const { selectedNote, setSelectedNote } = useNotesContext();
  const dropdownMenuTriggerRef = createRef<HTMLButtonElement>();

  const active = selectedNote?.id === note.id ? "bg-accent" : "";

  // TODO: test
  function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target !== dropdownMenuTriggerRef.current) {
      setSelectedNote(note);
    }
  }

  return (
    <div
      className={`${active} hover:bg-accent flex cursor-pointer px-4 py-2 duration-100 ease-linear`}
      onClick={handleClick}
    >
      <h3 className="w-full truncate text-start text-lg">{note.title}</h3>
      <NoteItemDropdownMenu
        targetNote={note}
        triggerRef={dropdownMenuTriggerRef}
      />
    </div>
  );
}
