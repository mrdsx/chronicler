import { CircleUserRound } from "lucide-react";
import { ROUTES } from "@/routes";
import { SkeletonLoader } from "./SkeletonLoader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useUserInfo } from "@/features/User/useUserInfo";

export function UserInfo() {
  const { getUserInfo } = useUserInfo();
  const navigate = useNavigate();

  const { data, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfo,
  });

  useEffect(() => {
    if (isError) {
      navigate(ROUTES.LOGIN);
    }
  }, [isError]);

  if (isPending || !data) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex items-center gap-2">
      <CircleUserRound />
      <h2 className="text-lg">{data.username}</h2>
    </div>
  );
}
