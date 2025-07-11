import { apiClient } from "../../../api/client";
import type { LoginFormInputInt } from "@/features/Auth/types";
import type { AccessTokensResponse } from "./types";
import { isErrorResponse } from "@/api";

type ReturnType = AccessTokensResponse;

export async function loginUser(
  loginFormData: LoginFormInputInt,
): Promise<ReturnType> {
  const res = await apiClient("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginFormData),
  });
  const data: ReturnType = await res.json();

  if (isErrorResponse(data)) throw new Error(data.detail);

  if (!res.ok)
    throw new Error("An unexpected error occurred while logging in.");

  return data;
}
