import AuthFormImage from "../../assets/auth_background.jpg";

export function AuthFormBackground() {
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
