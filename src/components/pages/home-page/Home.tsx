import { FeaturesSection } from "./FeaturesSection/FeaturesSection";
import { Header } from "./Header";
import { IntroductionSection } from "./IntroductionSection/IntroductionSection";

export function Home() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <FeaturesSection />
    </>
  );
}
