import { NotesArea, Sidebar } from "@/features/Notes/components";
import { NotesProvider } from "@/features/Notes/providers/NotesProvider";

export function Notes() {
  return (
    <NotesProvider>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProvider>
  );
}
