import styled from "styled-components";

interface CloseModalProps {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  padding: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  @media screen and (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const CloseModal = styled.div<CloseModalProps>`
  width: 70px;
  height: 70px;
  margin: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  z-zindex: 100;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    padding: 0.2rem;
  }
`;
