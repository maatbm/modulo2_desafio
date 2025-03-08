import { useContext, useEffect, useState } from "react";
import { RepoContext, UserContext, ModalProvider } from "../../contexts";
import { Loading, RepoCard } from "../index";
import { ReposContainer, RepoCardContainer, NavButton, NavigationContainer } from "./RepoListStyle";
import arrow_right from "../../assets/repoList/arrow-right.png";
import arrow_left from "../../assets/repoList/arrow-left.png";

export function ReposList() {
  const repoContext = useContext(RepoContext);
  const userContext = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 3;
  const totalRepos = repoContext?.repos?.length || 0;
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repoContext?.repos?.slice(indexOfFirstRepo, indexOfLastRepo) || [];
  const totalPages = Math.ceil(totalRepos / reposPerPage);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const displayedRepos = Math.min(indexOfLastRepo, totalRepos);

  useEffect(() => {
    if (userContext?.userData) {
      repoContext?.fetchRepos(userContext?.userData.login);
    }
  }, []);

  function nextPage(){
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setDirection('next');
    }
  };

  function prevPage(){
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
          <span>{displayedRepos} de {totalRepos}</span>
          <NavButton onClick={prevPage} disabled={currentPage === 1}><img src={arrow_left} alt="Anterior" /></NavButton>
          <NavButton onClick={nextPage} disabled={currentPage === totalPages}><img src={arrow_right} alt="Próximo"/></NavButton>
        </div>
      </NavigationContainer>
      <ReposContainer>
        {repoContext?.loading && <Loading />}
        {repoContext?.error && <p>{repoContext?.error}</p>}
        <RepoCardContainer $display_div={repoContext?.loading} $direction={direction}>
          <ModalProvider>
            {currentRepos.map((repo, index) => (
              <RepoCard
                key={repo.id}
                link={repo.html_url}
                description={repo.description || "Sem descrição"}
                index={indexOfFirstRepo + index + 1}
                id={repo.id}
              />
            ))}
          </ModalProvider>
        </RepoCardContainer>
      </ReposContainer>
    </>
  );
}