import { AccountActions } from "../../../features/User/components/AccountActions/AccountActions";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="border-border border-b-1">
      <nav className="mx-auto flex justify-between bg-(--home-background) px-4 py-2.5 lg:px-6">
        <Logo className="flex font-semibold text-indigo-500" />
        <AccountActions />
      </nav>
    </header>
  );
}
