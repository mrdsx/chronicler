import { Button } from "@/components/ui";
import { LoaderCircle } from "lucide-react";

interface SubmitBtnProps {
  isPending: boolean;
  children: React.ReactNode;
}

export function SubmitBtn({ isPending, children }: SubmitBtnProps) {
  return (
    <Button className="min-w-full" disabled={isPending} aria-busy={isPending}>
      {isPending ? <LoaderCircle className="animate-spin" /> : children}
    </Button>
  );
}
