import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "@/routes";
import { Button } from "@/components/ui";
import { FormHeader } from "./FormHeader";
import {
  UsernameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from "../AuthForm";
import { FormFooter } from "./FormFooter";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export function SignUpFormInner() {
  const navigate = useNavigate();
  const { register, handleSubmit: submitHandler } = useForm<AuthFormInputInt>();

  const [isDisabled, setIsDisabled] = useState(false);

  // TODO: refactor
  async function handleSubmit(signUpData: SignUpFormInputInt): Promise<void> {
    try {
      setIsDisabled(true);
      const res = await fetch("http://127.0.0.1:3000/api/auth/register", {
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
    } catch (error) {
      console.error("Sign up failed:", error);
      toast.error("Failed to create an account. Please try again.");
    } finally {
      setIsDisabled(false);
    }
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-4">
        <FormHeader />
        <UsernameInput register={register} />
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <ConfirmPasswordInput register={register} />
        <Button
          className="min-w-full"
          disabled={isDisabled}
          aria-busy={isDisabled}
        >
          {isDisabled ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Create an account"
          )}
        </Button>
        <FormFooter />
      </div>
    </form>
  );
}
