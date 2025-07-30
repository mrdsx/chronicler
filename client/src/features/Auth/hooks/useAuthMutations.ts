import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser, type AccessTokensResponse } from "../api";
import type { LoginFormInputInt, SignUpFormInputInt } from "../types";
import { setUserAccessToken } from "@/features/user/utils/userAccessTokenUtils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import { toast } from "sonner";
import { QUERY_KEYS } from "@/api";

export function useSignUpFormMutation() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<
    AccessTokensResponse,
    Error,
    SignUpFormInputInt
  >({
    mutationKey: [QUERY_KEYS.SIGNUP_ACCESS_TOKENS],
    mutationFn: registerUser,
    onSuccess: (data) => {
      setUserAccessToken(data.access_token);
      navigate(ROUTES.MAIN);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}

export function useLoginFormMutation() {
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation<
    AccessTokensResponse,
    Error,
    LoginFormInputInt
  >({
    mutationKey: [QUERY_KEYS.SIGNUP_ACCESS_TOKENS],
    mutationFn: loginUser,
    onSuccess: (data) => {
      setUserAccessToken(data.access_token);
      navigate(ROUTES.MAIN);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
}
