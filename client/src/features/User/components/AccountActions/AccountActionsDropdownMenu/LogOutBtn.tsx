import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteUserAccessToken } from "@/features/User/utils/userAccessTokenUtils";
import { LogOut } from "lucide-react";

export function LogOutBtn() {
  function handleClick(): void {
    deleteUserAccessToken();
    window.location.reload();
  }

  return (
    <DropdownMenuItem variant="destructive" onClick={handleClick}>
      <LogOut />
      Logout
    </DropdownMenuItem>
  );
}
