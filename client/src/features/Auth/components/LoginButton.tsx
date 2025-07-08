import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../components/custom/PrimaryButton";
import { ROUTES } from "@/routes";
import { Button } from "@/components/ui";

const BTN_CONTENT = "Log in";

// TODO: replace props "primary", "link" with "variant"
export function LoginButton({
  primary,
  link,
  additionalStyles,
}: {
  primary?: boolean;
  link?: boolean;
  additionalStyles?: string;
}) {
  return (
    <Link to={ROUTES.LOGIN}>
      {primary ? (
        <PrimaryButton type="submit" additionalStyles={additionalStyles}>
          {BTN_CONTENT}
        </PrimaryButton>
      ) : link ? (
        <Button type="submit" variant="link" className={additionalStyles}>
          {BTN_CONTENT}
        </Button>
      ) : (
        <Button type="submit" variant="outline" className={additionalStyles}>
          {BTN_CONTENT}
        </Button>
      )}
    </Link>
  );
}
