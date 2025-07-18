import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { FormHeader } from "./FormHeader";
import {
  ConfirmPasswordInput,
  EmailInput,
  PasswordInput,
  SubmitBtn,
  UsernameInput,
} from "../AuthForm";
import { FormFooter } from "./FormFooter";
import {
  confirmPasswordOptions,
  emailOptions,
  passwordOptions,
  usernameOptions,
} from "../../constants/signUpFormRegisterOptions";
import { useSignUpFormMutation } from "../../hooks/useAuthMutations";

export function SignUpFormInner() {
  const {
    register,
    handleSubmit: submitHandler,
    formState: { errors },
  } = useForm<AuthFormInputInt>({ mode: "onBlur" });
  const { mutate, isPending } = useSignUpFormMutation();

  function handleSubmit(loginFormData: SignUpFormInputInt) {
    mutate(loginFormData);
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-4">
        <FormHeader />
        <UsernameInput
          register={register}
          error={errors.username}
          registerOptions={usernameOptions}
        />
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
        <ConfirmPasswordInput
          register={register}
          error={errors.confirm_password}
          registerOptions={confirmPasswordOptions}
        />
        <SubmitBtn isPending={isPending}>Create an account</SubmitBtn>
        <FormFooter />
      </div>
    </form>
  );
}
