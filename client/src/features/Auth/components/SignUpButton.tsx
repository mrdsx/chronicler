import { Link } from "react-router-dom";
import { PrimaryButton } from "../../../components/custom/PrimaryButton";
import { ROUTES } from "@/routes";
import { Button } from "@/components/ui/button";

const BTN_CONTENT = "Sign up";

// TODO: replace props "primary", "link" with "variant"
export function SignUpButton({
  primary,
  link,
  additionalStyles,
}: {
  primary?: boolean;
  link?: boolean;
  additionalStyles?: string;
}) {
  return (
    <Link to={ROUTES.SIGNUP}>
      {primary ? (
        <PrimaryButton additionalStyles={additionalStyles}>
          {BTN_CONTENT}
        </PrimaryButton>
      ) : link ? (
        <Button variant="link" className={additionalStyles}>
          {BTN_CONTENT}
        </Button>
      ) : (
        <Button variant="outline" className={additionalStyles}>
          {BTN_CONTENT}
        </Button>
      )}
    </Link>
  );
}
