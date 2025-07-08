import { useContext } from "react";
import { SelectedNoteContext } from "../../providers/SelectedNoteContextProvider";

export function useSelectedNoteContext() {
  const context = useContext(SelectedNoteContext);
  if (context === null) {
    throw new Error(
      "useSelectedNoteContext hook must be used inside provider!",
    );
  }

  return context;
}
