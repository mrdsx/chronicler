import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";

export function LogOutBtn() {
  return (
    <DropdownMenuItem variant="destructive">
      <LogOut />
      Logout
    </DropdownMenuItem>
  );
}
