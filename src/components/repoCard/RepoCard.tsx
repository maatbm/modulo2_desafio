import { Container } from "./RepoCardStyle";
import { useState } from "react";
import { Modal } from "../modal/Modal";
import { Repos } from "../repos/Repos";

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
      <Container
        role="button"
        onClick={() => {
          setModal(true);
        }}
      >
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
        <Repos repoID={UserData.id} />
      </Modal>
    </>
  );
}
