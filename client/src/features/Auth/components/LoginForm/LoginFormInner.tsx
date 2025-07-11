import { Button } from "@/components/ui";
import type { AuthFormInputInt, LoginFormInputInt } from "../../types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "@/routes";
import { FormHeader } from "./FormHeader";
import { EmailInput, PasswordInput } from "../AuthForm";
import { FormFooter } from "./FormFooter";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export function LoginFormInner() {
  const navigate = useNavigate();
  const { register, handleSubmit: submitHandler } = useForm<AuthFormInputInt>();

  const [isDisabled, setIsDisabled] = useState(false);

  // TODO: refactor
  async function handleSubmit(loginFormData: LoginFormInputInt): Promise<void> {
    try {
      setIsDisabled(true);
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
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-6">
        <FormHeader />
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <Button
          className="min-w-full"
          type="submit"
          disabled={isDisabled}
          aria-busy={isDisabled}
        >
          {isDisabled ? <LoaderCircle className="animate-spin" /> : "Login"}
        </Button>
        <FormFooter />
      </div>
    </form>
  );
}
