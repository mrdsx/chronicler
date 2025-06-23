import userSvg from "@/assets/user.svg";
import { AddNoteBtn } from "@/features/Notes/components/AddNoteBtn";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Sidebar(): React.ReactElement {
  return (
    <div className="flex h-full w-[20%] flex-col gap-6 rounded-md border-1 border-(--border-color) bg-gray-100 p-4">
      <span className="ml-1 text-2xl text-gray-950">Chronicler</span>
      <div className="flex gap-2">
        <img src={userSvg} alt="User image" className="size-8 rounded-4xl" />
        <h2 className="text-lg">Username</h2>
      </div>
      <div className="grid gap-3">
        <Input type="text" className="bg-white" placeholder="Search note" />
        <AddNoteBtn />
      </div>
      <div>
        <Button variant="default" className="sidebar-btn">
          Home
        </Button>
        <Button variant="ghost" className="sidebar-btn">
          Notes
        </Button>
      </div>
    </div>
  );
}
