import { Container,Content } from "./RepoCardStyle";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { CloseModal } from "../modal/modalStyle";
import { Repos } from "../repos/Repos";
import closeLogo from "../../assets/repoCard/close.png";

interface Props {
  link: string;
  description: string;
  index: number;
  id: number;
}

export function RepoCard(RepoData: Props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container role="button" onClick={() => {setModal(true);}}>
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
            <span>{RepoData.description}</span>
          </div>
        </Content>
      </Container>
      <Modal isOpen={modal}>
        <CloseModal isOpen={modal} onClick={() => {setModal(false);}}>
          <img src={closeLogo} alt="close" />
        </CloseModal>
        <Repos repoID={RepoData.id} />
      </Modal>
    </>
  );
}
