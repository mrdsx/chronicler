import { AddNoteBtn } from "../AddNoteBtn";
import { SearchNotesBar } from "../SearchNotesBar";

export function NoteActions() {
  return (
    <div className="grid gap-3">
      <SearchNotesBar />
      <AddNoteBtn />
    </div>
  );
}
