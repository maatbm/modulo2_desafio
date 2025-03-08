import { useContext } from "react";
import { RepoContext, ModalContext } from "../../contexts";
import { Container } from "./ReposStyle";
import close from "../../assets/repos/close.png";

export function Repos() {
  const repoContext = useContext(RepoContext);
  const modalContext = useContext(ModalContext);
  const repo = repoContext?.repos.find((repo) => repo.id === modalContext.repoID);

  return (
    <>
      <Container>
        <h1>Especificações</h1>
        <div>
          <div>
            <div id="title_container">
              <h3>Repositório {modalContext.index}</h3>
              <img src={close} alt="Fechar modal" onClick={()=>{modalContext.setModal(false)}} />
            </div>
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
              <p>{repo?.description === null ? "-----" : repo?.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
