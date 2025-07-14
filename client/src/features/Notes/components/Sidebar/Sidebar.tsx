import { Logo } from "../../../../components/Logo";
import { UserInfo } from "./UserInfo";
import { NoteActions } from "./NoteActions";
import { Navigation } from "./Navigation";
import { ToggleThemeBtn } from "../../../Theme/components/ToggleThemeBtn";

export function Sidebar() {
  return (
    <aside className="flex h-full w-[20%] flex-col gap-6 rounded-md border-1 border-(--border-color) bg-(--sidebar) p-4">
      <Logo className="ml-1" />
      <UserInfo />
      <NoteActions />
      <Navigation />
      <ToggleThemeBtn />
    </aside>
  );
}
