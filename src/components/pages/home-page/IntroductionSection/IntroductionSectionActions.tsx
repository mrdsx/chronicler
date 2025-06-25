import { SignUpButton } from "@/components/custom/SignUpButton";
import { Button } from "@/components/ui/button";

export function IntroductionSectionActions() {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-2">
      <SignUpButton />
      <Button variant="link">Learn more</Button>
    </div>
  );
}
