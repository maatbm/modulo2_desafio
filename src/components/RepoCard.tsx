import { Container } from "../styles/components/RepoCardStyle";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  description: string;
  index: number;
  repoID: number;
}

export function RepoCard(UserData: Props) {
  const navigate = useNavigate();

  return (
    <Container role="button" onClick={()=>{navigate(`/repo/${UserData.repoID}`)}}>
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
