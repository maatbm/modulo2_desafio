import { useState, createContext, SetStateAction, Dispatch } from "react";

interface ModalContextType {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  repoID: number | null;
  setRepoID: Dispatch<SetStateAction<number | null>>;
  index: number | null;
  setIndex: Dispatch<SetStateAction<number | null>>;
}

export const ModalContext = createContext<ModalContextType>({
  modal: false,
  setModal: () => {},
  repoID: null,
  setRepoID: () => {},
  index: null,
  setIndex: () => {}
});

export const ModalProvider = ({ children }: any) => {
  const [modal, setModal] = useState(false);
  const [repoID, setRepoID] = useState<number | null>(null);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <ModalContext.Provider value={{ modal, setModal, repoID, setRepoID, index, setIndex }}>
      {children}
    </ModalContext.Provider>
  );
};
