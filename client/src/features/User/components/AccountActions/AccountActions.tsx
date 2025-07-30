import { AccountActionsDropdownMenu } from "./AccountActionsDropdownMenu/AccountActionsDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/auth/components";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";
import { useUserQuery } from "../../hooks/useUserQuery";
import { getUserData } from "../../api/User";
import type { UserResponse } from "../../api/types";

export function AccountActions() {
  const { user, isPending } = useUserQuery<UserResponse>({
    queryFn: getUserData,
  });

  if (isPending) {
    return <AccountActionsSkeletonLoader />;
  }

  return (
    <div className="flex gap-2">
      {user ? (
        <AccountActionsDropdownMenu username={user.username} />
      ) : (
        <>
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </>
      )}
    </div>
  );
}
