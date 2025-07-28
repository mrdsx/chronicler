import { Input } from "@/components/ui";
import { useSearchNotesContext } from "../hooks/context";

export function SearchNotesBar() {
  const { setSearchQuery } = useSearchNotesContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value.toLocaleLowerCase());
  }

  return (
    <Input
      type="text"
      className="bg-white"
      id="search-notes-input"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
