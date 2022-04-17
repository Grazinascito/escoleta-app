import { HeaderApp } from "../HeaderApp";
import { MainSection } from "../MainSection";
import { Container } from "./styles";

export const HomePage = () => {
  return (
    <Container>
      <HeaderApp />
      <MainSection />
    </Container>
  );
};
