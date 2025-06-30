import { FeaturesSection } from "./components/FeaturesSection/FeaturesSection";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/IntroductionSection/IntroductionSection";

export function Home() {
  return (
    <>
      <Header />
      <IntroductionSection />
      <FeaturesSection />
    </>
  );
}
