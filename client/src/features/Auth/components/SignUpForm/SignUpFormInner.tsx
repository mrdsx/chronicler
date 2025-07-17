import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "@/routes";
import { Button } from "@/components/ui";
import { FormHeader } from "./FormHeader";
import {
  UsernameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from "../AuthForm";
import { FormFooter } from "./FormFooter";
import { LoaderCircle } from "lucide-react";
import { registerUser, type AccessTokensResponse } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { setUserAccessToken } from "@/features/User/utils/userAccessTokenUtils";

export function SignUpFormInner() {
  const navigate = useNavigate();
  const { register, handleSubmit: submitHandler } = useForm<AuthFormInputInt>();

  const { mutate, isPending } = useMutation<
    AccessTokensResponse,
    Error,
    SignUpFormInputInt
  >({
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

  function handleSubmit(loginFormData: SignUpFormInputInt) {
    mutate(loginFormData);
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-4">
        <FormHeader />
        <UsernameInput register={register} />
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <ConfirmPasswordInput register={register} />
        <Button
          className="min-w-full"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Create an account"
          )}
        </Button>
        <FormFooter />
      </div>
    </form>
  );
}
