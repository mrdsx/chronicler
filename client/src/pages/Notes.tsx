import { NotesArea, Sidebar } from "@/features/Notes/components";
import { NotesProviders } from "@/providers/NotesProviders";

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
