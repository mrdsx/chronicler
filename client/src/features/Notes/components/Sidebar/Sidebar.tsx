import { Logo } from "../../../../components/Logo";
import { UserInfo } from "./UserInfo";
import { NoteActions } from "./NoteActions";
import { Navigation } from "./Navigation";
import { ToggleThemeBtn } from "../../../Theme/components/ToggleThemeBtn";
import { useEffect, useState } from "react";
import { useUserInfo } from "@/features/User/useUserInfo";
import { SkeletonLoader } from "./SkeletonLoader";

export function Sidebar() {
  const { getUserInfo } = useUserInfo();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserInfo() {
      const userInfo = await getUserInfo();
      setUsername(userInfo?.username);
    }

    fetchUserInfo();
  }, []);

  return (
    <aside className="flex h-full w-[20%] flex-col gap-6 rounded-md border-1 border-(--border-color) bg-(--sidebar) p-4">
      <Logo className="ml-1" />
      {username ? <UserInfo username={username} /> : <SkeletonLoader />}
      <NoteActions />
      <Navigation />
      <ToggleThemeBtn />
    </aside>
  );
}
