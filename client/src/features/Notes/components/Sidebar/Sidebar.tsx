import { Logo } from "../../../../components/Logo";
import { Navigation } from "./Navigation";
import { NoteActions } from "./NoteActions";
import { ToggleThemeBtn } from "../../../Theme/components/ToggleThemeBtn";
import { UserInfo } from "../../../User/components/UserInfo/UserInfo";

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
