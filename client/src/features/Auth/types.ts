import type {
  FieldError,
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export interface AuthFormInputInt {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface AuthFormFieldsProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
}

export interface AuthFormInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  error?: FieldError;
  registerOptions?: RegisterOptions<AuthFormInputInt>;
}

export interface LoginFormInputInt
  extends Omit<AuthFormInputInt, "username" | "confirm_password"> {}

export interface SignUpFormInputInt extends AuthFormInputInt {}
