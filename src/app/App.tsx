import { NotesProviders } from "@/providers/NotesProviders";
import { Sidebar } from "@/components/custom/Sidebar";
import { NotesArea } from "@/features/Notes/components/NotesArea";
import { Home } from "@/components/pages/home-page/Home";
import "./App.css";

export default function App() {
  const isHome = false;

  return isHome ? (
    <Home />
  ) : (
    <NotesProviders>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProviders>
  );
}
