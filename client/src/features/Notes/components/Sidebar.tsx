import { AddNoteBtn, SearchNotesBar } from "@/features/Notes/components";
import { ToggleThemeBtn } from "../../../components/custom/ToggleThemeBtn";
import { Button } from "../../../components/ui";
import { CircleUserRound, Home, NotepadText } from "lucide-react";

export function Sidebar() {
  return (
    <div className="flex h-full w-[20%] flex-col gap-6 rounded-md border-1 border-(--border-color) bg-(--sidebar) p-4">
      <span className="ml-1 text-2xl">Chronicler</span>
      <div className="flex items-center gap-2">
        <CircleUserRound />
        <h2 className="text-lg">Username</h2>
      </div>
      <div className="grid gap-3">
        <SearchNotesBar />
        <AddNoteBtn />
      </div>
      <div className="mb-auto">
        <Button variant="ghost" className="sidebar-btn">
          <Home />
          Home
        </Button>
        <Button variant="ghost" className="sidebar-btn">
          <NotepadText />
          Notes
        </Button>
      </div>
      <ToggleThemeBtn />
    </div>
  );
}
