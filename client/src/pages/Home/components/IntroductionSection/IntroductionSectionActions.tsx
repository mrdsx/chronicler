import { SignUpButton } from "@/features/Auth/components";
import { Button } from "@/components/ui";

export function IntroductionSectionActions() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-2">
      <SignUpButton primary />
      <Button variant="link">Learn more</Button>
    </div>
  );
}
