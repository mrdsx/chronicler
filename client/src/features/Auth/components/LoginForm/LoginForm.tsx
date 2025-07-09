import { Card, CardContent } from "../../../../components/ui";
import { FormBackground } from "@/features/Auth/components/AuthForm/FormBackground";
import { LoginFormInner } from "./LoginFormInner";

export function LoginForm() {
  return (
    <div className="grid gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <LoginFormInner />
          <FormBackground />
        </CardContent>
      </Card>
    </div>
  );
}
