import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { ROUTES } from "@/routes";
import { NotepadText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function NotesBtn() {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate(ROUTES.MAIN);
  }

  return (
    <DropdownMenuItem onClick={handleClick}>
      <NotepadText />
      Notes
    </DropdownMenuItem>
  );
}
