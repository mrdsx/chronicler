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
import type { AuthFormFieldsProps, SignUpFormInputInt } from "../../types";

export function FormFields({
  register,
  errors,
  watch,
}: AuthFormFieldsProps<SignUpFormInputInt>) {
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
