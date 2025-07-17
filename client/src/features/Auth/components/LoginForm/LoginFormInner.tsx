import type { AuthFormInputInt, LoginFormInputInt } from "../../types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "@/routes";
import { FormHeader } from "./FormHeader";
import { FormFooter } from "./FormFooter";
import { EmailInput, PasswordInput, SubmitBtn } from "../AuthForm";
import { loginUser } from "@/features/Auth/api/Auth";
import { useMutation } from "@tanstack/react-query";
import type { AccessTokensResponse } from "../../api/types";
import { setUserAccessToken } from "@/features/User/utils/userAccessTokenUtils";

export function LoginFormInner() {
  const navigate = useNavigate();
  const { register, handleSubmit: submitHandler } = useForm<AuthFormInputInt>();

  const { mutate, isPending } = useMutation<
    AccessTokensResponse,
    Error,
    LoginFormInputInt
  >({
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

  function handleSubmit(loginFormData: LoginFormInputInt) {
    mutate(loginFormData);
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-6">
        <FormHeader />
        <EmailInput register={register} />
        <PasswordInput register={register} />
        <SubmitBtn isPending={isPending}>Login</SubmitBtn>
        <FormFooter />
      </div>
    </form>
  );
}
