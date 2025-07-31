import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { APINote } from "@/features/notes/api";
import {
  useNoteTitleInputRef,
  useSelectedNoteContext,
} from "@/features/notes/hooks";
import { Edit } from "lucide-react";

export function RenameNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const noteTitleInputRef = useNoteTitleInputRef();

  function handleClick(): void {
    setSelectedNote(targetNote);
    setTimeout(() => noteTitleInputRef.current?.select(), 210);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Edit />
      Rename
    </DropdownMenuItem>
  );
}
