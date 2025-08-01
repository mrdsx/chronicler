import { Switch } from "@/components/ui";
import { useThemeContext } from "../hooks/useThemeContext";
import { Moon, Sun } from "lucide-react";

export function ToggleThemeSwitch() {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  function handleCheckedChange(checked: boolean): void {
    document.body.classList.toggle("dark", checked);
    setIsDarkMode(checked);
  }

  return (
    <Switch checked={isDarkMode} onCheckedChange={handleCheckedChange}>
      {isDarkMode ? (
        <Sun className="size-3 place-self-center" />
      ) : (
        <Moon className="size-3 place-self-center" />
      )}
    </Switch>
  );
}
