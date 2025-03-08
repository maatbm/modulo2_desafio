import { ErrorContainer } from "./ErrorStyle";
import logoErro from "../../assets/error/aviso.png";

interface ErrorProps {
  error: string | undefined;
}

export function Error({ error }: ErrorProps) {
  return (
    <ErrorContainer>
      <img src={logoErro} alt="Erro" />
      <div>
        <h3>Ops!</h3>
        <p>{error}</p>
      </div>
    </ErrorContainer>
  );
}
