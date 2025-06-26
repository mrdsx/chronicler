import { Button } from "../ui/button";

export function PrimaryButton({
  children,
  additionalStyles,
  ...props
}: React.ComponentProps<"button"> & {
  children: React.ReactNode;
  additionalStyles?: string;
}) {
  return (
    <Button
      variant="default"
      className={`bg-(--primary-content-color) text-white hover:bg-(--accent-content-color) ${additionalStyles}`}
      {...props}
    >
      {children}
    </Button>
  );
}
