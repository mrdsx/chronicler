import type { UseFormRegister } from "react-hook-form";

export interface AuthFormInputProps {
  register: UseFormRegister<LoginFormInputInt | SignUpFormInputInt>;
}

export interface LoginFormInputInt {
  email: string;
  password: string;
}

export interface SignUpFormInputInt {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}
