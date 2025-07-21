import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import {
  confirmPasswordOptions,
  emailOptions,
  passwordOptions,
  usernameOptions,
} from "../../constants/signUpFormRegisterOptions";
import {
  ConfirmPasswordInput,
  EmailInput,
  PasswordInput,
  UsernameInput,
} from "../AuthForm";
import type { AuthFormInputInt } from "../../types";

interface SignUpFormFieldsProps {
  register: UseFormRegister<AuthFormInputInt>;
  errors: FieldErrors<AuthFormInputInt>;
  watch: UseFormWatch<AuthFormInputInt>;
}

export function SignUpFormFields({
  register,
  errors,
  watch,
}: SignUpFormFieldsProps) {
  return (
    <>
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
        registerOptions={{
          ...confirmPasswordOptions,
          validate: (value) =>
            value === watch("password") ||
            "Password and confirm password do not match",
        }}
      />
    </>
  );
}
