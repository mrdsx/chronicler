import { AccountActions } from "../../../../features/User/components/AccountActions/AccountActions";
import { Logo } from "@/components/Logo";
import { useUserInfo } from "@/features/User/hooks/useUserInfo";
import { useQuery } from "@tanstack/react-query";

export function Header() {
  const { getUserInfo } = useUserInfo();

  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
    retry: false,
  });

  return (
    <header>
      <nav className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        <Logo className="flex font-semibold text-indigo-500" />
        {isPending ? (
          <div className="skeleton-loader h-7 w-30 rounded-md"></div>
        ) : (
          <AccountActions user={user} />
        )}
      </nav>
    </header>
  );
}
