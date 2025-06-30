import { NotepadText, Pencil, UsersRound } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSectionContent() {
  return (
    <div className="mt-16 lg:mt-24 lg:max-w-none">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Note Organization"
          description="Easily organize your notes with tags, folders, and categories"
          icon={<NotepadText />}
        />
        <FeatureCard
          title="Collaboration"
          description="Share notes with team members and collaborate in real-time"
          icon={<UsersRound />}
        />
        <FeatureCard
          title="Customization"
          description="Customize your note-taking experience with themes, fonts, and layouts"
          icon={<Pencil />}
        />
      </dl>
    </div>
  );
}
