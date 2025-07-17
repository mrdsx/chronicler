import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  CircleUserRound,
  LogOut,
  NotepadText,
  Settings,
  User,
} from "lucide-react";

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
        <DropdownMenuItem>
          <NotepadText />
          Notes
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
