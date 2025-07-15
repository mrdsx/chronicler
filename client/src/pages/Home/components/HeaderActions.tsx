import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import type { User } from "@/features/User/types";

export function HeaderActions({ user }: { user: User | undefined }) {
  return (
    <div className="flex gap-2">
      {user ? (
        `Hello, ${user.username}`
      ) : (
        <>
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </>
      )}
    </div>
  );
}
