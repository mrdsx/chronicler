import { useForm } from "react-hook-form";
import type { AuthFormInputInt, SignUpFormInputInt } from "../../types";
import { useSignUpFormMutation } from "../../hooks/useAuthMutations";
import { SignUpFormFields, SignUpFormFooter, SignUpFormHeader } from ".";
import { SubmitBtn } from "../AuthForm";

export function FormInner() {
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
        <SignUpFormHeader />
        <SignUpFormFields register={register} errors={errors} watch={watch} />
        <SubmitBtn isPending={isPending}>Create an account</SubmitBtn>
        <SignUpFormFooter />
      </div>
    </form>
  );
}
