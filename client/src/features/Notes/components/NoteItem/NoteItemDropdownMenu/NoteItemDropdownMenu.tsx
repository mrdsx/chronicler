import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import type { Note } from "../../../types";
import { CloneNoteBtn } from "./CloneNoteBtn";
import { DeleteNoteBtn } from "./DeleteNoteBtn";
import { RenameNoteBtn } from "./RenameNoteBtn";

interface NoteItemDropdownMenuProps {
  targetNote: Note;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function NoteItemDropdownMenu({
  targetNote,
  triggerRef,
}: NoteItemDropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex-0 rounded-lg hover:backdrop-brightness-90 dark:hover:backdrop-brightness-150"
        ref={triggerRef}
      >
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <CloneNoteBtn targetNote={targetNote} />
        <RenameNoteBtn targetNote={targetNote} />
        <DeleteNoteBtn targetNote={targetNote} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
