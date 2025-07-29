import { Card, CardContent } from "@/components/ui";
import {
  FormBackground,
  LoginForm,
  LoginFormInner,
} from "@/features/auth/components";

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
