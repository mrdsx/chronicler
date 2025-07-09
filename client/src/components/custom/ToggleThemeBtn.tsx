import { Button } from "../ui";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "@/providers/ThemeProvider";

export function ToggleThemeBtn() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  function handleClick(): void {
    document.body.classList.toggle("dark", isDarkMode);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Button
      variant="outline"
      className="border-(--border-color)"
      onClick={handleClick}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
}
