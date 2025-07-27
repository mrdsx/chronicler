import { AccountActions } from "@/features/User/components/AccountActions/AccountActions";
import {
  Header,
  IntroductionSection,
  FeaturesSection,
  IntroductionSectionTitle,
  IntroductionSectionActions,
  FeaturesSectionTitle,
  FeaturesSectionContent,
} from "./components";
import { Logo } from "@/components/Logo";
import { LogoImage } from "@/components/LogoImage";

export function Home() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-2">
          <LogoImage width={"1.5rem"} />
          <Logo className="flex font-semibold text-indigo-600" />
        </div>
        <AccountActions />
      </Header>
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
