import { Container, Content } from "./RepoCardStyle";
import { useContext } from "react";
import { Modal, Repos } from "../";
import { ModalContext } from "../../contexts";
import { CloseModal } from "../modal/modalStyle";
import closeLogo from "../../assets/repoCard/close.png";

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
      <Container role="button" onClick={() => {modalContext.setModal(true)}}>
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
        <CloseModal isOpen={modalContext.modal} onClick={() => {modalContext.setModal(false)}}>
          <img src={closeLogo} alt="close" />
        </CloseModal>
        <Repos repoID={RepoData.id} index={RepoData.index} />
      </Modal>
    </>
  );
}
