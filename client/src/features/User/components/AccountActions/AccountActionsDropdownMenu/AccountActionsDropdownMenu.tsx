import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { NotesBtn } from "./NotesBtn";
import { ProfileBtn } from "./ProfileBtn";
import { SettingsBtn } from "./SettingsBtn";
import { LogOutBtn } from "./LogOutBtn";
import { CircleUserRound } from "lucide-react";

export function AccountActionsDropdownMenu({ username }: { username: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <div className="flex gap-2 p-1">
          <CircleUserRound />
          {username}
        </div>
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
