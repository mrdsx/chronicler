import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui";
import {
  useCreateNoteMutation,
  useNoteTitleInputRefContext,
} from "@/features/notes/hooks";

export function AddNoteBtn() {
  const noteTitleInputRef = useNoteTitleInputRefContext();

  const { mutate, isPending } = useCreateNoteMutation();

  function handleClick(): void {
    mutate({ title: "Untitled", content: "" });
    setTimeout(() => noteTitleInputRef.current?.select(), 1);
  }

  return (
    <Button className="min-w-full" onClick={handleClick} disabled={isPending}>
      <CirclePlus />
      Add Note
    </Button>
  );
}
