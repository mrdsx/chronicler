import { NotesProviders } from "@/providers/NotesProviders";
import { Sidebar } from "@/components/Sidebar";
import { NotesArea } from "@/features/Notes/components/NotesArea";
import "./App.css";

export default function App() {
  return (
    <NotesProviders>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProviders>
  );
}
