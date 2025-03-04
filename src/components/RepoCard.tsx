import { Container } from "../styles/components/RepoCardStyle";

interface Props {
  name: string;
  description: string;
  index: number;
}

export function RepoCard(UserData: Props) {
  return (
    <Container>
      <h3>Repositório {UserData.index}</h3>
      <hr />
      <div>
        <h4>{UserData.name}</h4>
      </div>
      <div>
        <p>{UserData.description}</p>
      </div>
    </Container>
  );
}
