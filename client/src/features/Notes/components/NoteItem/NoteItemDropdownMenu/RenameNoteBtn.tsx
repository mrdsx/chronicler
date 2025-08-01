import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { APINote } from "@/features/notes/api";
import {
  useNoteTitleInputRefContext,
  useSelectedNoteContext,
} from "@/features/notes/hooks";
import { Edit } from "lucide-react";

export function RenameNoteBtn({ targetNote }: { targetNote: APINote }) {
  const { setSelectedNote } = useSelectedNoteContext();
  const noteTitleInputRef = useNoteTitleInputRefContext();

  function handleClick(): void {
    setSelectedNote(targetNote);
    setTimeout(() => noteTitleInputRef.current?.select(), 220);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <Edit />
      Rename
    </DropdownMenuItem>
  );
}
