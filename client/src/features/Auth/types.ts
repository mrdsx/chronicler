import type {
  FieldError,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface AuthFormInputObject {
  Component: React.ComponentType<AuthFormInputProps<AuthFormInputInt>>;
  name: keyof AuthFormInputInt;
  options: RegisterOptions<AuthFormInputInt, AuthFormInputObject["name"]>;
}

export interface AuthFormInputInt {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface AuthFormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: FieldError;
  registerOptions?: RegisterOptions<AuthFormInputInt>;
}

export interface LoginFormInputInt
  extends Omit<AuthFormInputInt, "username" | "confirm_password"> {}

export interface SignUpFormInputInt extends AuthFormInputInt {}
