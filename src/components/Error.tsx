import { Container } from "../styles/components/ErrorStyle";
import logoErro from "../assets/error/aviso.png";

interface ErrorProps {
  error: string | undefined;
}

export function Error({ error }: ErrorProps) {
  return (
    <Container>
      <img src={logoErro} alt="Erro" />
      <div>
        <h2>Ops!</h2>
        <p>{error}</p>
      </div>
    </Container>
  );
}
