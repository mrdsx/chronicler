import type { AuthFormInputInt, LoginFormInputInt } from "../../types";
import { useForm } from "react-hook-form";
import { FormHeader as LoginFormHeader } from "./FormHeader";
import { FormFooter as LoginFormFooter } from "./FormFooter";
import { EmailInput, PasswordInput, SubmitBtn } from "../AuthForm";
import {
  emailOptions,
  passwordOptions,
} from "../../constants/loginFormRegisterOptions";
import { useLoginFormMutation } from "../../hooks/useAuthMutations";

export function FormInner() {
  const {
    register,
    handleSubmit: submitHandler,
    formState: { errors },
  } = useForm<AuthFormInputInt>({
    mode: "onBlur",
  });

  const { mutate, isPending } = useLoginFormMutation();

  function handleSubmit(loginFormData: LoginFormInputInt) {
    mutate(loginFormData);
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-6">
        <LoginFormHeader />
        <EmailInput
          register={register}
          error={errors.email}
          registerOptions={emailOptions}
        />
        <PasswordInput
          register={register}
          error={errors.password}
          registerOptions={passwordOptions}
        />
        <SubmitBtn isPending={isPending}>Login</SubmitBtn>
        <LoginFormFooter />
      </div>
    </form>
  );
}
