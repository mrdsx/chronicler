import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemeContext must be used inside ThemeContextProvider");
  }

  return context;
}
