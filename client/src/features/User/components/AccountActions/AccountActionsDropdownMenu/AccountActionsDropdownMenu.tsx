import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOutBtn, NotesBtn, ProfileBtn, SettingsBtn } from ".";
import { UserInfo } from "../../UserInfo/UserInfo";

export function AccountActionsDropdownMenu({ username }: { username: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <UserInfo className="p-1" username={username} />
        <DropdownMenuSeparator />
        <NotesBtn />
        <ProfileBtn />
        <SettingsBtn />
        <DropdownMenuSeparator />
        <LogOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
