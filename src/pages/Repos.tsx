import { useContext } from "react";
import { RepoContext } from "../contexts/ReposContext";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import { Main, Container } from "../styles/pages/ReposStyle";

export function Repos() {
  const { repoID } = useParams();
  const repoContext = useContext(RepoContext);
  const repo = repoContext?.repos.find((repo) => repo.id === Number(repoID));

  return (
    <>
      <Header />
      <Main>
        <Container>
          <h1>Especificações</h1>
          <div>
            <div>
              <h2>{repo?.name}</h2>
              <hr />
              <div>
                <h4>URL</h4>
                <a href={repo?.html_url} target="_blank"><p>{repo?.html_url}</p></a>
              </div>
              <div>
                <h4>Privacidade</h4>
                <p>{repo?.visibility}</p>
              </div>
              <div>
                <h4>Linguagem</h4>
                <p>{repo?.language}</p>
              </div>
              <div>
                <h4>Descrição</h4>
                <p>{repo?.description === null ? "-----": repo?.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
}
