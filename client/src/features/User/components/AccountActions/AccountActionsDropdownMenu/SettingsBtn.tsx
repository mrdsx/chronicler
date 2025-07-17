import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";

export function SettingsBtn() {
  return (
    <DropdownMenuItem>
      <Settings />
      Settings
    </DropdownMenuItem>
  );
}
