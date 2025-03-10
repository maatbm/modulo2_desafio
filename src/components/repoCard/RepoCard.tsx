import { Container, Content } from "./RepoCardStyle";
import { useContext } from "react";
import { Modal, Repos } from "../";
import { ModalContext } from "../../contexts";

interface Props {
  link: string;
  description: string;
  index: number;
  id: number;
}

export function RepoCard(RepoData: Props) {
  const modalContext = useContext(ModalContext);

  function getShortDescription(description: string) {
    return description.split(" ").slice(0, 7).join(" ");
  }

  return (
    <>
      <Container role="button" onClick={() => {modalContext.setModal(true);modalContext.setRepoID(RepoData.id);modalContext.setIndex(RepoData.index);}}>
        <Content>
          <h3>Repositório {RepoData.index}</h3>
        </Content>
        <hr />
        <Content>
          <div>
            <p>Link</p>
            <h5><a href={RepoData.link} target="_blank">{RepoData.link}</a></h5>
          </div>
          <div>
            <p>Descrição</p>
            <span>{getShortDescription(RepoData.description)}...</span>
          </div>
        </Content>
      </Container>
      <Modal isOpen={modalContext.modal}>
        <Repos />
      </Modal>
    </>
  );
}
