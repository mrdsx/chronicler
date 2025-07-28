import { Loader } from "lucide-react";

export function NotesListSkeletonLoader() {
  return (
    <div className="grid place-content-center">
      <Loader className="mt-5 animate-spin" />
    </div>
  );
}
