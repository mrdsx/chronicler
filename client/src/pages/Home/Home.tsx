import { AccountActions } from "@/features/user/components";
import {
  Header,
  IntroductionSection,
  IntroductionSectionTitle,
  IntroductionSectionActions,
  FeaturesSection,
  FeaturesSectionTitle,
  FeaturesSectionContent,
} from "./components";
import { Logo, LogoImage } from "@/components";
import { ChevronDown } from "lucide-react";

export function Home() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-2">
          <LogoImage width="1.5rem" />
          <Logo className="flex font-semibold text-indigo-600" />
        </div>
        <div className="flex items-center gap-4">
          <AccountActions />
          <button>
            <ChevronDown />
          </button>
        </div>
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
