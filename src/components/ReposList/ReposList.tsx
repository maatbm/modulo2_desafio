import { useContext, useEffect } from "react";
import { RepoContext } from "../../contexts/ReposContext";
import { UserContext } from "../../contexts/UserContext";
import { Loading, RepoCard } from "../index";
import { ReposContainer, RepoCardContainer } from "./RepoListStyle";

export function ReposList() {
  const repoContext = useContext(RepoContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext?.userData) {
      repoContext?.fetchRepos(userContext?.userData.login);
    }
  }, []);

  return (
    <>
      <ReposContainer>
        {repoContext?.loading && <Loading />}
        {repoContext?.error && <p>{repoContext?.error}</p>}
        <RepoCardContainer $display_div={repoContext?.loading}>
          {repoContext?.repos.map((repo, index) => (
            <RepoCard
              key={repo.id}
              link={repo.html_url}
              description={repo.description || "Sem descrição"}
              index={index + 1}
              id={repo.id}
            />
          ))}
        </RepoCardContainer>
      </ReposContainer>
    </>
  );
}
