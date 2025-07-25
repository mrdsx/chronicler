import { CircleUserRound } from "lucide-react";
import { ROUTES } from "@/app/routes";
import { UserInfoSkeletonLoader } from "./UserInfoSkeletonLoader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useUserData } from "@/features/User/hooks/useUserData";
import { cn } from "@/lib/utils";

interface UserInfoProps {
  username?: string;
}

export function UserInfo({
  username,
  className,
}: React.ComponentProps<"div"> & UserInfoProps) {
  const { getUserData } = useUserData();
  const navigate = useNavigate();

  const usernamePropNotProvided = username === undefined;

  const {
    data: user,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
    retry: false,
    enabled: usernamePropNotProvided,
  });

  useEffect(() => {
    if (isError) {
      navigate(ROUTES.LOGIN);
    }
  }, [isError]);

  if (isPending || !user) {
    return <UserInfoSkeletonLoader />;
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CircleUserRound />
      <h2>{user.username ?? username}</h2>
    </div>
  );
}
