import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "@/routes";
import { FormHeader } from "./FormHeader";
import {
  ConfirmPasswordInput,
  EmailInput,
  PasswordInput,
  SubmitBtn,
  UsernameInput,
} from "../AuthForm";
import { FormFooter } from "./FormFooter";
import { registerUser, type AccessTokensResponse } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { setUserAccessToken } from "@/features/User/utils/userAccessTokenUtils";
import {
  confirmPasswordOptions,
  emailOptions,
  passwordOptions,
  usernameOptions,
} from "../../constants/signUpFormRegisterOptions";

export function SignUpFormInner() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: submitHandler,
    formState: { errors },
  } = useForm<AuthFormInputInt>({ mode: "onBlur" });

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
        <UsernameInput
          register={register}
          error={errors.username}
          registerOptions={usernameOptions}
        />
        <EmailInput
          register={register}
          error={errors.email}
          registerOptions={emailOptions}
        />
        <PasswordInput
          register={register}
          error={errors.password}
          registerOptions={passwordOptions}
        />
        <ConfirmPasswordInput
          register={register}
          error={errors.confirm_password}
          registerOptions={confirmPasswordOptions}
        />
        <SubmitBtn isPending={isPending}>Create an account</SubmitBtn>
        <FormFooter />
      </div>
    </form>
  );
}
