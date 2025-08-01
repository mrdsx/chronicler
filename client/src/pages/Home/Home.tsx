import {
  Header,
  IntroductionSection,
  IntroductionSectionTitle,
  IntroductionSectionActions,
  FeaturesSection,
  FeaturesSectionTitle,
  FeaturesSectionContent,
} from "./components";

export function Home() {
  return (
    <>
      <Header />
      <IntroductionSection>
        <IntroductionSectionTitle />
        <IntroductionSectionActions />
      </IntroductionSection>
      <FeaturesSection>
        <FeaturesSectionTitle />
        <FeaturesSectionContent />
      </FeaturesSection>
    </>
  );
}
