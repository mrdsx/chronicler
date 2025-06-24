import { useRef } from "react";
import { NoteItemDropdownMenu } from "./NoteItemDropdownMenu";
import type { Note } from "../../types";
import { useSelectedNoteContext } from "../../providers/SelectedNoteContextProvider";

interface Props {
  note: Note;
}

export function NoteItem(props: Props) {
  const { note } = props;
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();
  const dropdownMenuTriggerRef = useRef<HTMLButtonElement>(null);

  const active = selectedNote?.id === note.id ? "bg-accent" : "";

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
