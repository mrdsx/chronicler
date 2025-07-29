import AuthFormImage from "@/app/assets/auth_background.jpg";

export function FormBackground() {
  return (
    <div className="bg-muted relative hidden md:block">
      <img
        src={AuthFormImage}
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
