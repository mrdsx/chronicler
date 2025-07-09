import { Link } from "react-router-dom";
import { ROUTES } from "@/routes";
import { Button, buttonVariants } from "@/components/ui";
import type { VariantProps } from "class-variance-authority";

export function LoginBtn({
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <Link to={ROUTES.LOGIN}>
      <Button variant={variant} size={size} {...props}>
        Log In
      </Button>
    </Link>
  );
}
