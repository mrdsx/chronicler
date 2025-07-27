import { Card, CardContent } from "@/components/ui";
import { SignUpForm } from "@/features/Auth/components";
import { FormBackground } from "@/features/Auth/components/AuthForm/FormBackground";
import { SignUpFormInner } from "@/features/Auth/components/SignUpForm/SignUpFormInner";

export function SignUp() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-background)">
      <SignUpForm>
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <FormBackground />
            <SignUpFormInner />
          </CardContent>
        </Card>
      </SignUpForm>
    </div>
  );
}
