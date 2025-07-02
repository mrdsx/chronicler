import { NotesArea } from "@/features/Notes/components/NotesArea";
import { NotesProviders } from "@/providers/NotesProviders";
import { Sidebar } from "@/features/Notes/components/Sidebar";
import { useEffect } from "react";

export function Notes() {
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    async function getUser() {
      const res = await fetch("http://127.0.0.1:3000/api/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        console.log(data.detail);
        return;
      }

      console.log(data.username);
    }

    getUser();
  }, []);

  return (
    <NotesProviders>
      <div className="box-border flex h-[100vh] gap-2 bg-(--background) p-2">
        <Sidebar />
        <NotesArea />
      </div>
    </NotesProviders>
  );
}
