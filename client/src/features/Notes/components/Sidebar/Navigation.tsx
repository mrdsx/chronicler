import { Button } from "@/components/ui";
import { Home, NotepadText } from "lucide-react";
import "./Sidebar.css";

export function Navigation() {
  return (
    <div className="mb-auto">
      <Button variant="ghost" className="sidebar-navigation-btn">
        <Home />
        Home
      </Button>
      <Button variant="ghost" className="sidebar-navigation-btn">
        <NotepadText />
        Notes
      </Button>
    </div>
  );
}
