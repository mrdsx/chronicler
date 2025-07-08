import { FeaturesSectionContent } from "./FeaturesSectionContent";
import { FeaturesSectionTitle } from "./FeaturesSectionTitle";

export function FeaturesSection() {
  return (
    <div className="bg-(--primary-content-color) py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FeaturesSectionTitle />
        <FeaturesSectionContent />
      </div>
    </div>
  );
}
