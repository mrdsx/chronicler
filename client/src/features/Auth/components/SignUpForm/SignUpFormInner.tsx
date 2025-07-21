import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { FormHeader } from "./FormHeader";
import { SubmitBtn } from "../AuthForm";
import { FormFooter } from "./FormFooter";
import { useSignUpFormMutation } from "../../hooks/useAuthMutations";
import { SignUpFormFields } from "./SignUpFormFields";

export function SignUpFormInner() {
  const {
    register,
    handleSubmit: submitHandler,
    formState: { errors },
    watch,
  } = useForm<AuthFormInputInt>({ mode: "onBlur" });
  const { mutate, isPending } = useSignUpFormMutation();

  function handleSubmit(loginFormData: SignUpFormInputInt) {
    mutate(loginFormData);
  }

  return (
    <form className="w-90 p-6 md:p-8" onSubmit={submitHandler(handleSubmit)}>
      <div className="flex flex-col gap-4">
        <FormHeader />
        <SignUpFormFields register={register} errors={errors} watch={watch} />
        <SubmitBtn isPending={isPending}>Create an account</SubmitBtn>
        <FormFooter />
      </div>
    </form>
  );
}
