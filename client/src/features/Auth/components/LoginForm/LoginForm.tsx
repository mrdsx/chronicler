import { Card, CardContent } from "../../../../components/ui";
import { AuthFormBackground } from "@/components/custom/AuthFormBackground";
import { LoginFormInner } from "./LoginFormInner";

export function LoginForm() {
  return (
    <div className="grid gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <LoginFormInner />
          <AuthFormBackground />
        </CardContent>
      </Card>
    </div>
  );
}
