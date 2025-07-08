import { NotesArea } from "@/features/Notes/components/NotesArea";
import { NotesProviders } from "@/providers/NotesProviders";
import { Sidebar } from "../features/Notes/components/Sidebar";

export function Notes() {
  return (
    <NotesProviders>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProviders>
  );
}
