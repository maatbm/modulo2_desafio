import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { Header, Loading, RepoCard, UserCard } from "../components/index";
import { RepoContext } from "../contexts/ReposContext";

import { Container, Main, ReposContainer } from "../styles/pages/UserPageStyle";

export function UserPage() {
  const userContext = useContext(UserContext);
  const repoContext = useContext(RepoContext);

  useEffect(() => {
    if (userContext?.userData) {
      repoContext?.fetchRepos(userContext?.userData?.login);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <h1>Informações do perfil</h1>
          <div>
            <UserCard
              avatar={userContext?.userData?.avatar_url}
              name={userContext?.userData?.name}
              bio={userContext?.userData?.bio}
            />
          </div>
          <h1>Repositórios</h1>
          <ReposContainer>
            {repoContext?.loading && <Loading />}
            {repoContext?.error && <p>{repoContext?.error}</p>}
            <div>
              {repoContext?.repos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  name={repo.name}
                  description={repo.description || "Sem descrição"}
                />
              ))}
            </div>
          </ReposContainer>
        </Container>
      </Main>
    </>
  );
}
