import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { useDropdownMenuItems } from "./useDropdownMenuItems";
import type { Note } from "../../types";

interface Props {
  targetNote: Note;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function NoteItemDropdownMenu({ targetNote, triggerRef }: Props) {
  const dropdownMenuItems = useDropdownMenuItems(targetNote);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex-0 rounded-lg hover:backdrop-brightness-90 dark:hover:backdrop-brightness-150"
        ref={triggerRef}
      >
        <EllipsisVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuItems.map((item, index) => (
          <DropdownMenuItem
            className="flex cursor-pointer gap-2"
            variant={item.variant}
            onClick={item.onClick}
            key={item.title + index}
          >
            {item.icon}
            {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
