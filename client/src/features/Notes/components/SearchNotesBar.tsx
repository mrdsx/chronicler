import { Input } from "@/components/ui/input";
import { useSearchNotesContext } from "../providers/SearchNotesContextProvider";

export function SearchNotesBar() {
  const { setSearchQuery } = useSearchNotesContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputVal = e.target.value;
    if (inputVal.trim().length > 0) {
      setSearchQuery(inputVal.toLocaleLowerCase());
    } else {
      setSearchQuery("");
    }
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
