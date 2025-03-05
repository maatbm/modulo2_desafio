import { Container } from "../styles/components/LoadingStyle";
import spinImage from "../assets/loading/girar.png";

export function Loading() {
  return (
    <Container>
      <img src={spinImage} alt="Carregando..." />
      <h3>Carregando...</h3>
    </Container>
  );
}
