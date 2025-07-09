import { Card, CardContent } from "../../../../components/ui";
import { FormBackground } from "@/features/Auth/components/AuthForm/FormBackground";
import { SignUpFormInner } from "./SignUpFormInner";

export function SignUpForm() {
  return (
    <div className="grid gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <FormBackground />
          <SignUpFormInner />
        </CardContent>
      </Card>
    </div>
  );
}
