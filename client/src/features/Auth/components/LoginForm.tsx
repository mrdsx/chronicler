import { cn } from "@/lib/utils";
import {
  Button,
  Card,
  CardContent,
  Input,
  Label,
} from "../../../components/ui";
import { SignUpBtn } from "./SignUpBtn";
import { useForm } from "react-hook-form";
import type { LoginFormInputInt } from "../types";
import { ROUTES } from "@/routes";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthFormBackground } from "@/components/custom/AuthFormBackground";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormInputInt>();

  // TODO: refactor
  async function onSubmit(loginFormData: LoginFormInputInt): Promise<void> {
    const res = await fetch("http://127.0.0.1:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginFormData),
    });
    const data = await res.json();

    if (!res.ok) {
      toast.error(data.detail);
      return;
    }

    localStorage.setItem("access_token", data.access_token);
    navigate(ROUTES.MAIN);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="w-90 p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email")}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center gap-10">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
              </div>
              <Button className="min-w-full" type="submit">
                Log In
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <SignUpBtn className="p-0" variant="link" size="sm" />
              </div>
            </div>
          </form>
          <AuthFormBackground />
        </CardContent>
      </Card>
    </div>
  );
}
