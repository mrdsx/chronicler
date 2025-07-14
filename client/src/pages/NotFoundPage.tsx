import { Button } from "@/components/ui";
import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-content-center bg-(--home-background) text-center">
      <h1 className="text-foreground mb-4 text-6xl font-semibold">404</h1>
      <h2 className="dark:text-foreground mb-4 text-2xl text-gray-600">
        Page Not Found
      </h2>
      <p className="dark:text-foreground/80 mb-8 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to={ROUTES.HOME}>
        <Button size="lg">Go Home</Button>
      </Link>
    </div>
  );
}
