import { AccountActionsDropdownMenu } from "./AccountActionsDropdownMenu/AccountActionsDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/auth/components";
import { useQuery } from "@tanstack/react-query";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";
import { QUERY_KEYS } from "@/api";
import { getUserData } from "@/features/user/api/userData";

export function AccountActions() {
  const { data: user, isPending } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: ({ signal }) => getUserData(signal),
    retry: false,
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
