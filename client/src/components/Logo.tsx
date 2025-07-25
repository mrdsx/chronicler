import { cn } from "@/lib/utils";
import { ROUTES } from "@/app/routes";

export function Logo({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <a href={ROUTES.HOME}>
      <span className={cn("text-2xl", className)} {...props}>
        Chronicler
      </span>
    </a>
  );
}
