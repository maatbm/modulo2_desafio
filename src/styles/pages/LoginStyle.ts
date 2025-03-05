import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 65%;
  height: 100%;
  background-color: var(--blue);

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: var(--white);
    font-family: "Quicksand", sans-serif;
  }

  img {
    width: 70px;
    height: 70px;
  }

  @media screen and (max-width: 481px) {
    display: none;
  }

  @media screen and (max-width: 1279px) and (min-width: 482px) {
    width: 50%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
  background-color: var(--white);

  @media screen and (max-width: 481px) {
    width: 100%;
  }

  @media screen and (max-width: 1279px) and (min-width: 482px) {
    width: 50%;
  }
`;
