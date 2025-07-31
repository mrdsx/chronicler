import { useNoteContentInputActions } from "./useNoteContentInputActions";

export function NoteContentInput() {
  const {
    handleBlur,
    handleChange,
    handleKeyDown,
    handleKeyPress,
    handleKeyUp,
    noteContentInputVal,
  } = useNoteContentInputActions();

  return (
    <textarea
      className="h-full resize-none scroll-smooth outline-0"
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyPress={handleKeyPress}
      onKeyUp={handleKeyUp}
      value={noteContentInputVal}
    />
  );
}
