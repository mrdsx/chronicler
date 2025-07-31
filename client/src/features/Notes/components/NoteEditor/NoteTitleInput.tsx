import { useNoteTitleInputRef } from "../../hooks/useNoteTitleInputRef";
import { useNoteTitleInputActions } from "./useNoteTitleInputActions";

export function NoteTitleInput() {
  const noteTitleInputRef = useNoteTitleInputRef();
  const { handleBlur, handleChange, handleKeyDown, noteTitleInputVal } =
    useNoteTitleInputActions();

  return (
    <input
      className="text-2xl font-semibold outline-0"
      type="text"
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      ref={noteTitleInputRef}
      value={noteTitleInputVal}
    />
  );
}
