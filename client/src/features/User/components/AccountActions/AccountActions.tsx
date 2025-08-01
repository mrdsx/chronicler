import { AccountActionsDropdownMenu } from "./AccountActionsDropdownMenu/AccountActionsDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/auth/components";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";
import { useGetUserQuery } from "../../hooks/useGetUserQuery";

export function AccountActions() {
  const { user, isPending } = useGetUserQuery({ enabled: true });

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
