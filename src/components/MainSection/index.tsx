import { LeftMainSection } from "./LeftMainSection";
import { RightMainSection } from "./RightMainSection";
import { Section } from "./styles";

export const MainSection = () => {
  return (
    <Section>
      <LeftMainSection />
      <RightMainSection />
    </Section>
  );
};
