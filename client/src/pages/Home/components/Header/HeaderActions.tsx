import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import type { User } from "@/features/User/types";

export function HeaderActions({ user }: { user: User | undefined }) {
  return (
    <div className="flex gap-2">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Account</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </>
      )}
    </div>
  );
}
