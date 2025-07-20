import { LogoImage } from "@/components/LogoImage";
import { AccountActions } from "../../../features/User/components/AccountActions/AccountActions";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="border-border border-b-1">
      <nav className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        <div className="flex items-center gap-2">
          <LogoImage width={"1.5rem"} />
          <Logo className="flex font-semibold text-indigo-600" />
        </div>
        <AccountActions />
      </nav>
    </header>
  );
}
