import { Sidebar } from "@/components/Sidebar";
import { NotesProvider } from "@/providers/NotesProvider";
import { NotesArea } from "@/features/Notes/components/NotesArea";
import "./App.css";

export default function App(): React.ReactElement {
  return (
    <NotesProvider>
      <div className="box-border flex h-[100vh] gap-2 bg-white p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProvider>
  );
}
