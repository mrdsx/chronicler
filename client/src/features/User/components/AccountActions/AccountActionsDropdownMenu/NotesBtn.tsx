import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { NotepadText } from "lucide-react";

export function NotesBtn() {
  return (
    <DropdownMenuItem>
      <NotepadText />
      Notes
    </DropdownMenuItem>
  );
}
