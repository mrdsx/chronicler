import { NotesList } from "./NotesList";
import { NoteSection } from "./NoteSection/NoteSection";

export function NotesArea(): React.ReactElement {
  return (
    <div className="flex w-full rounded-md border-1 border-(--border-color)">
      <NotesList />
      <NoteSection />
    </div>
  );
}
