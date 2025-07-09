import { useContext } from "react";
import { SelectedNoteContext } from "../../providers";

export function useSelectedNoteContext() {
  const context = useContext(SelectedNoteContext);
  if (context === null) {
    throw new Error(
      "useSelectedNoteContext must be used inside SelectedNoteContextProvider!",
    );
  }

  return context;
}
