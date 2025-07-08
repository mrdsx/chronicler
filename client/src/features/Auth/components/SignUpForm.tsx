import { cn } from "@/lib/utils";
import { Card, CardContent, Input, Label } from "../../../components/ui";
import { LoginButton } from "./LoginButton";
import AuthCardImage from "../../../assets/auth_card_image.jpg";
import { PrimaryButton } from "@/components/custom/PrimaryButton";
import { useForm } from "react-hook-form";
import type { SignUpFormInputInt } from "../types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import { toast } from "sonner";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit: submitHandler } =
    useForm<SignUpFormInputInt>();
  const navigate = useNavigate();

  // TODO: refactor
  async function handleSubmit(signUpData: SignUpFormInputInt): Promise<void> {
    const res = await fetch("http://127.0.0.1:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
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
          <div className="bg-muted relative hidden md:block">
            <img
              src={AuthCardImage}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <form
            className="w-90 p-6 md:p-8"
            onSubmit={submitHandler(handleSubmit)}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome to Chronicler</h1>
                <p className="text-muted-foreground text-balance">
                  Create new account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" required {...register("username")} />
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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password")}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  {...register("confirm_password")}
                />
              </div>
              <PrimaryButton additionalStyles="min-w-full">
                Create an account
              </PrimaryButton>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <LoginButton link additionalStyles="py-0 px-0 h-full" />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
