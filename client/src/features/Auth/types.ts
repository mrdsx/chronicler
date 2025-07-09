import type { UseFormRegister, FieldValues } from "react-hook-form";

export interface AuthFormInputInt {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface AuthFormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
}

export interface LoginFormInputInt
  extends Omit<AuthFormInputInt, "username" | "confirm_password"> {}

export interface SignUpFormInputInt extends AuthFormInputInt {}
