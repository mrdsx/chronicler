import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";

export function Logo({ className }: React.ComponentProps<"span">) {
  return (
    <a href={ROUTES.HOME}>
      <span className={cn("text-2xl", className)}>Chronicler</span>
    </a>
  );
}
