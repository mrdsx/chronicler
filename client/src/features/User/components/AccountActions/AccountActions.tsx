import { AccountActionsDropdownMenu } from "./AccountActionsDropdownMenu/AccountActionsDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/auth/components";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";
import { useUserQuery } from "../../hooks/useUserQuery";
import { getUser, type UserResponse } from "../../api";

export function AccountActions() {
  const { user, isPending } = useUserQuery<UserResponse>({
    queryFn: getUser,
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
