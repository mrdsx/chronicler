import { CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/app/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserQuery } from "../../hooks/useUserQuery";
import { UserInfoSkeletonLoader } from "./UserInfoSkeletonLoader";
import { getUser, type UserResponse } from "../../api";

interface UserInfoProps {
  username?: string;
  className?: string;
}

export function UserInfo({ username, className }: UserInfoProps) {
  const navigate = useNavigate();

  const usernamePropNotProvided = username === undefined;
  const { user, isError, isPending } = useUserQuery<UserResponse>({
    queryFn: getUser,
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
