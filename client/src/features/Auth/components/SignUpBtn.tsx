import { Link } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import { Button, buttonVariants } from "@/components/ui";
import type { VariantProps } from "class-variance-authority";

export function SignUpBtn({
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <Link to={ROUTES.SIGNUP}>
      <Button variant={variant} size={size} {...props}>
        Sign up
      </Button>
    </Link>
  );
}
