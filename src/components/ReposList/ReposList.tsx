import { useContext, useEffect, useState } from "react";
import { RepoContext } from "../../contexts/ReposContext";
import { UserContext } from "../../contexts/UserContext";
import { Loading, RepoCard } from "../index";
import { ReposContainer, RepoCardContainer, NavButton, NavigationContainer } from "./RepoListStyle";

export function ReposList() {
  const repoContext = useContext(RepoContext);
  const userContext = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 3;

  useEffect(() => {
    if (userContext?.userData) {
      repoContext?.fetchRepos(userContext?.userData.login);
    }
  }, []);

  const totalRepos = repoContext?.repos?.length || 0;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repoContext?.repos?.slice(indexOfFirstRepo, indexOfLastRepo) || [];
  const totalPages = Math.ceil(totalRepos / reposPerPage);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setDirection('next');
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setDirection('prev');
    }
  };

  return (
    <>
      <NavigationContainer>
        <h1>Repositórios</h1>
        <div>
          <span>{currentPage} de {totalPages}</span>
          <NavButton onClick={prevPage} disabled={currentPage === 1}>Anterior</NavButton>
          <NavButton onClick={nextPage} disabled={currentPage === totalPages}>Próximo</NavButton>
        </div>
      </NavigationContainer>
      <ReposContainer>
        {repoContext?.loading && <Loading />}
        {repoContext?.error && <p>{repoContext?.error}</p>}
        <RepoCardContainer $display_div={repoContext?.loading} $direction={direction}>
          {currentRepos.map((repo, index) => (
            <RepoCard
              key={repo.id}
              link={repo.html_url}
              description={repo.description || "Sem descrição"}
              index={indexOfFirstRepo + index + 1}
              id={repo.id}
            />
          ))}
        </RepoCardContainer>
      </ReposContainer>
    </>
  );
}
