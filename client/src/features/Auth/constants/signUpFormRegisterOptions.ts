import type { RegisterOptions } from "react-hook-form";
import type { AuthFormInputInt } from "../types";

export const usernameOptions: RegisterOptions<AuthFormInputInt, "username"> = {
  required: "Username is required",
  minLength: {
    value: 3,
    message: "Username must be at least 3 characters",
  },
  maxLength: {
    value: 20,
    message: "Username must be at most 20 characters",
  },
  pattern: {
    value: /^[a-zA-Z0-9_]+$/,
    message: "Username can only contain letters, numbers, and underscores",
  },
};

export const emailOptions: RegisterOptions<AuthFormInputInt, "email"> = {
  required: "Email is required",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter a valid email address",
  },
};

export const passwordOptions: RegisterOptions<AuthFormInputInt, "password"> = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must be at least 8 characters",
  },
  validate: {
    hasUpper: (val: string) =>
      /[A-Z]/.test(val) || "Password must contain an uppercase letter",
    hasLower: (val: string) =>
      /[a-z]/.test(val) || "Password must contain a lowercase letter",
    hasNumber: (val: string) =>
      /\d/.test(val) || "Password must contain a number",
    hasSymbols: (val: string) =>
      /\W|_/g.test(val) || "Password must contain a special symbol",
  },
};

export const confirmPasswordOptions: RegisterOptions<
  AuthFormInputInt,
  "confirm_password"
> = {
  required: "Please confirm your password",
};
