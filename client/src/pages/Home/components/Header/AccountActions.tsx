import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import type { User } from "@/features/User/types";
import { AccountDropdownMenu } from "./AccountDropdownMenu";

export function AccountActions({ user }: { user: User | undefined }) {
  return (
    <div className="flex gap-2">
      {user ? (
        <AccountDropdownMenu />
      ) : (
        <>
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </>
      )}
    </div>
  );
}
