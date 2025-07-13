import type {
  LoginFormInputInt,
  SignUpFormInputInt,
} from "@/features/Auth/types";
import { apiClient } from "@/api";
import type { AccessTokensResponse } from "./types";
import { AUTH_ENDPOINTS } from "./constants";
import { getApiRequestJsonOptions } from "../utils/apiRequestOptions";

export async function loginUser(
  loginFormData: LoginFormInputInt,
): Promise<AccessTokensResponse> {
  const apiRequestOptions = getApiRequestJsonOptions(loginFormData, "POST");

  return await apiClient(
    AUTH_ENDPOINTS.login,
    apiRequestOptions,
    "An unexpected error occurred while logging in",
  );
}

export async function registerUser(
  signUpFormData: SignUpFormInputInt,
): Promise<AccessTokensResponse> {
  const apiRequestOptions = getApiRequestJsonOptions(signUpFormData, "POST");

  return await apiClient(
    AUTH_ENDPOINTS.signup,
    apiRequestOptions,
    "An unexpected error occurred while signing up",
  );
}
