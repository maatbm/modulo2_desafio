import { Container } from "./RepoCardStyle";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { CloseModal } from "../modal/modalStyle";
import { Repos } from "../repos/Repos";
import closeLogo from "../../assets/repoCard/close.png"

interface Props {
  name: string;
  description: string;
  index: number;
  id: number;
}

export function RepoCard(UserData: Props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Container role="button" onClick={() => {setModal(true);}}>
        <h3>Repositório {UserData.index}</h3>
        <hr />
        <div>
          <h4>{UserData.name}</h4>
        </div>
        <div>
          <p>{UserData.description}</p>
        </div>
      </Container>
      <Modal isOpen={modal}>
        <CloseModal isOpen={modal} onClick={()=>{setModal(false)}}>
          <img src={closeLogo} alt="close" />
        </CloseModal>
        <Repos repoID={UserData.id} />
      </Modal>
    </>
  );
}
