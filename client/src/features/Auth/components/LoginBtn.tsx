import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import { Button, buttonVariants } from "@/components/ui";
import type { VariantProps } from "class-variance-authority";

export function LoginBtn({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  const navigate = useNavigate();

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={() => navigate(ROUTES.LOGIN)}
      {...props}
    >
      Log In
    </Button>
  );
}
