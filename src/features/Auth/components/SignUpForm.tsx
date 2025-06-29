import { cn } from "@/lib/utils";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { LoginButton } from "./LoginButton";
import AuthCardImage from "../../../assets/auth_card_image.jpg";
import { PrimaryButton } from "@/components/custom/PrimaryButton";
import { useForm } from "react-hook-form";
import type { SignUpFormInputInt } from "../types";

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit } = useForm<SignUpFormInputInt>();

  function onSubmit(data: SignUpFormInputInt): void {
    console.log("Sign Up input:", data);
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
          <form className="w-90 p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome to Chronicler</h1>
                <p className="text-muted-foreground text-balance">
                  Create new account
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
              <div className="grid gap-3">
                <div className="flex items-center gap-10">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                </div>
                <Input
                  id="confirm-password"
                  type="password"
                  required
                  {...register("confirmPassword")}
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
