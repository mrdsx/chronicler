import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui";
import { useThemeContext } from "@/features/Theme/hooks/useThemeContext";

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
