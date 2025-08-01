import { Logo, LogoImage } from "@/components";
import { ToggleThemeSwitch } from "@/features/theme/components/ToggleThemeSwitch";
import { AccountActions } from "@/features/user/components";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isHeaderBottomOpen, setIsHeaderBottomOpen] = useState<boolean>(false);

  const isOpen = isHeaderBottomOpen ? "block" : "hidden";

  function handleClick(): void {
    setIsHeaderBottomOpen(!isHeaderBottomOpen);
  }

  return (
    <header className="dark:border-b-border border-b-1 border-b-(--border-color) bg-(--home-background)">
      <div className="mx-auto flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2">
          <LogoImage width="1.5rem" />
          <Logo className="flex font-semibold text-indigo-600" />
        </div>
        <div className="flex items-center gap-4">
          <AccountActions />
          <button onClick={handleClick}>
            <ChevronDown
              className={
                isHeaderBottomOpen
                  ? "linear rotate-180 duration-300"
                  : "linear rotate-0 duration-300"
              }
            />
          </button>
        </div>
      </div>
      <div className={`${isOpen} animate-sidebar px-6 py-4 duration-300`}>
        <div className="flex items-center justify-end space-x-2">
          <ToggleThemeSwitch />
        </div>
      </div>
    </header>
  );
}
