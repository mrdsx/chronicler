import { useContext } from "react";
import { NoteTitleInputRefContext } from "../../providers";

export function useNoteTitleInputRefContext() {
  const context = useContext(NoteTitleInputRefContext);
  if (context === null) {
    throw new Error(
      "NoteTitleInputRefContext must be used inside NoteTitleInputRefContextProvider",
    );
  }

  return context;
}
