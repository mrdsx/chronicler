import { Card, CardContent } from "@/components/ui";
import { LoginForm } from "@/features/Auth/components";
import { FormBackground } from "@/features/Auth/components/AuthForm/FormBackground";
import { LoginFormInner } from "@/features/Auth/components/LoginForm/LoginFormInner";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-(--home-background)">
      <LoginForm>
        <Card className="overflow-hidden p-0">
          <CardContent className="grid p-0 md:grid-cols-2">
            <LoginFormInner />
            <FormBackground />
          </CardContent>
        </Card>
      </LoginForm>
    </div>
  );
}
