import { Logo } from "@/components/Logo";
import { Navigation } from "./Navigation";
import { NoteActions } from "./NoteActions";
import { ToggleThemeBtn } from "@/features/theme/components/ToggleThemeBtn";
import { UserInfo } from "@/features/user/components/UserInfo/UserInfo";

export function Sidebar() {
  return (
    <aside className="flex h-full w-[20%] flex-col gap-6 rounded-md border-1 border-(--border-color) bg-(--sidebar) p-4">
      <Logo className="ml-1" />
      <UserInfo className="text-lg" />
      <NoteActions />
      <Navigation />
      <ToggleThemeBtn />
    </aside>
  );
}
