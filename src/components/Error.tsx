import { Container } from "../styles/components/ErrorStyle";

interface ErrorProps {
  error: string | undefined;
}

export function Error({ error}: ErrorProps) {
  return (
    <Container>
      <h2>Ops!</h2>
      <p>{error}</p>
    </Container>
  );
}
