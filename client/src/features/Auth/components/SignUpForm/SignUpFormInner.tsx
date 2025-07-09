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

export function SignUpFormInner() {
  const navigate = useNavigate();
  const { register, handleSubmit: submitHandler } = useForm<AuthFormInputInt>();

  // TODO: refactor
  async function handleSubmit(signUpData: SignUpFormInputInt): Promise<void> {
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
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-4">
        <FormHeader />
        <UsernameInput register={register} />
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <ConfirmPasswordInput register={register} />
        <Button className="min-w-full">Create an account</Button>
        <FormFooter />
      </div>
    </form>
  );
}
