import { useForm } from "react-hook-form";
import type {
  AuthFormInputInt,
  AuthFormInputObject,
  SignUpFormInputInt,
} from "../../types";
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

const inputs: AuthFormInputObject[] = [
  { Component: UsernameInput, name: "username", options: usernameOptions },
  { Component: EmailInput, name: "email", options: emailOptions },
  { Component: PasswordInput, name: "password", options: passwordOptions },
  {
    Component: ConfirmPasswordInput,
    name: "confirm_password",
    options: confirmPasswordOptions,
  },
];

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
        {inputs.map(({ Component, name, options }) => (
          <Component
            key={name}
            register={register}
            error={errors[name]}
            registerOptions={options}
          />
        ))}
        <SubmitBtn isPending={isPending}>Create an account</SubmitBtn>
        <FormFooter />
      </div>
    </form>
  );
}
