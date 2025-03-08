import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { Container } from "./modalStyle";
import { Header } from "../";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export function Modal({ children, isOpen }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
