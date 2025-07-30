import { useRef } from "react";
import { NoteItemDropdownMenu } from "./NoteItemDropdownMenu/NoteItemDropdownMenu";
import { useSelectedNoteContext } from "../../hooks/context";
import type { APINote } from "../../api";

interface NoteItemProps {
  note: APINote;
}

export function NoteItem({ note }: NoteItemProps) {
  const { selectedNote, setSelectedNote } = useSelectedNoteContext();
  const dropdownMenuTriggerRef = useRef<HTMLButtonElement>(null);

  const active = selectedNote?.id === note.id ? "bg-secondary" : "";

  function handleClick(e: React.MouseEvent<HTMLDivElement>): void {
    if (e.target !== dropdownMenuTriggerRef.current) {
      setSelectedNote(note);
    }
  }

  return (
    <div
      className={`${active} hover:bg-secondary flex cursor-pointer px-4 py-2 duration-100 ease-linear`}
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
