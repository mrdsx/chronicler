import { Card, CardContent } from "@/components/ui";
import {
  FormBackground,
  SignUpForm,
  SignUpFormInner,
} from "@/features/auth/components";

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
