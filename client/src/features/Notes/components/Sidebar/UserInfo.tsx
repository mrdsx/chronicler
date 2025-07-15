import { CircleUserRound } from "lucide-react";

export function UserInfo({ username }: { username?: string }) {
  return (
    <div className="flex items-center gap-2">
      <CircleUserRound />
      <h2 className="text-lg">{username}</h2>
    </div>
  );
}
