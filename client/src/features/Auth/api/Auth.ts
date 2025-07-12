import { apiClient } from "../../../api/client";
import type {
  LoginFormInputInt,
  SignUpFormInputInt,
} from "@/features/Auth/types";
import type { AccessTokensResponse } from "./types";
import { isErrorResponse } from "@/api";

export async function loginUser(
  loginFormData: LoginFormInputInt,
): Promise<AccessTokensResponse> {
  const res = await apiClient("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginFormData),
  });
  const data: AccessTokensResponse = await res.json();

  if (isErrorResponse(data)) throw new Error(data.detail);

  if (!res.ok)
    throw new Error("An unexpected error occurred while logging in.");

  return data;
}

export async function registerUser(signUpFormData: SignUpFormInputInt) {
  const res = await apiClient("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signUpFormData),
  });
  const data = await res.json();

  if (isErrorResponse(data)) throw new Error(data.detail);

  if (!res.ok) throw new Error("An unexpected error occurred while signing up");

  return data;
}
