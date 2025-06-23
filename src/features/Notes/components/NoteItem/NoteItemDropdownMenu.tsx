import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { useNotesActions } from "../../hooks/useNotesActions";
import { useNotesContext, type Note } from "@/providers/NotesProvider";

interface Props {
  targetNote: Note;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function NoteItemDropdownMenu({
  targetNote,
  triggerRef,
}: Props): React.ReactElement {
  const { setSelectedNote } = useNotesContext();
  const { selectNoteTitleInput, deleteNote } = useNotesActions();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex-0 rounded-md hover:backdrop-brightness-90"
        tabIndex={-1}
        ref={triggerRef}
      >
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            setSelectedNote(targetNote);
            setTimeout(selectNoteTitleInput, 180);
          }}
        >
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          variant="destructive"
          onClick={() => {
            deleteNote(targetNote.id);
            setSelectedNote(null);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
