import { AccountActionsDropdownMenu } from "./AccountActionsDropdownMenu/AccountActionsDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import { useQuery } from "@tanstack/react-query";
import { useUserData } from "../../hooks/useUserData";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";

export function AccountActions() {
  const { getUserData } = useUserData();

  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
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
