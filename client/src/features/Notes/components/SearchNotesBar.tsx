import { Input } from "@/components/ui";
import { useSearchNotesContext } from "../hooks/context";

export function SearchNotesBar() {
  const { setSearchQuery } = useSearchNotesContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputVal = e.target.value;
    setSearchQuery(inputVal.toLocaleLowerCase());
  }

  return (
    <Input
      type="text"
      className="bg-white"
      placeholder="Search notes"
      onChange={handleChange}
    />
  );
}
