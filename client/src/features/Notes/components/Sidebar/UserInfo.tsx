import { CircleUserRound } from "lucide-react";

export function UserInfo() {
  return (
    <div className="flex items-center gap-2">
      <CircleUserRound />
      <h2 className="text-lg">Username</h2>
    </div>
  );
}
