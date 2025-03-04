import { Container } from "../styles/components/RepoCardStyle";

interface Props {
  name: string;
  description: string;
}

export function RepoCard(UserData: Props) {
  return (
    <Container>
      <h1>{UserData.name}</h1>
      <p>{UserData.description}</p>
    </Container>
  );
}
