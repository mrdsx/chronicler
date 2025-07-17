import { AccountDropdownMenu } from "./AccountDropdownMenu";
import { LoginBtn, SignUpBtn } from "@/features/Auth/components";
import { useQuery } from "@tanstack/react-query";
import { useUserInfo } from "../../hooks/useUserInfo";
import { AccountActionsSkeletonLoader } from "./AccountActionsSkeletonLoader";

export function AccountActions() {
  const { getUserInfo } = useUserInfo();

  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    retry: false,
  });

  if (isPending) {
    return <AccountActionsSkeletonLoader />;
  }

  return (
    <div className="flex gap-2">
      {user ? (
        <AccountDropdownMenu {...user} />
      ) : (
        <>
          <LoginBtn variant="outline" />
          <SignUpBtn />
        </>
      )}
    </div>
  );
}
