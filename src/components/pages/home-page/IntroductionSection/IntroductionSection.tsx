import { IntroductionSectionTitle } from "./IntroductionSectionTitle";
import { IntroductionSectionActions } from "./IntroductionSectionActions";

export function IntroductionSection() {
  return (
    <div className="bg-(--home-primary-color) py-10 pt-14">
      <div className="mx-auto max-w-3xl text-center lg:px-8 lg:py-10">
        <IntroductionSectionTitle />
        <IntroductionSectionActions />
      </div>
    </div>
  );
}
