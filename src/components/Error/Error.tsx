import { Container } from "./ErrorStyle";

interface Props{
  error?: string;
}

export function Error({error}: Props) {
  return (
    <Container>
      <h2>Ops!</h2>
      <p>{error}</p>
    </Container>
  );
}
