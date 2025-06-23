import { NoteTitleInput } from "./NoteTitleInput";
import { NoteContentInput } from "./NoteContentInput";
import { useNotesContext } from "@/providers/NotesProvider";

export function NoteSection(): React.ReactElement {
  const { selectedNote } = useNotesContext();

  if (!selectedNote) return <></>;

  return (
    <div className="w-[70%]">
      <div className="flex h-full flex-col gap-4 px-[10%] py-8">
        <NoteTitleInput />
        <NoteContentInput />
      </div>
    </div>
  );
}
