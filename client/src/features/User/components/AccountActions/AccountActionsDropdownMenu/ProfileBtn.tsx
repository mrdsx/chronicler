import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

export function ProfileBtn() {
  return (
    <DropdownMenuItem>
      <User />
      Profile
    </DropdownMenuItem>
  );
}
