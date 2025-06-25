import { Button } from "../ui/button";

export function SignUpButton() {
  return (
    <Button
      variant="default"
      className="max-w-fit bg-(--primary-content-color) text-white hover:bg-(--accent-content-color)"
    >
      Sign up
    </Button>
  );
}
