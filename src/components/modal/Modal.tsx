import { createPortal } from "react-dom";
import { ReactNode } from "react";
import { Container } from "./modalStyle";
import { Header } from "../";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export function Modal({ children, isOpen }: ModalProps) {

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Container>
      <Header />
      {children}
    </Container>,
    document.getElementById("RepoModal") as HTMLElement
  );
}
