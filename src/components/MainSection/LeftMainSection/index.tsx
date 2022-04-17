import { Container, Button } from "./styles";
import searchIcon from "../../../assets/Buscar.svg";

export const LeftMainSection = () => {
  return (
    <Container>
      <h1>Seu marketplace de coleta de resíduos.</h1>
      <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
      <Button>
        <div>
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <div>
          <span>Pesquisar pontos de coleta</span>
        </div>
      </Button>
    </Container>
  );
};
