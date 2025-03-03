import styled from "styled-components";

interface h1Props {
  display?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 80%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    label {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: var(--black);
      font-family: "Inter", sans-serif;
    }

    input {
      width: 100%;
      height: 2rem;
      border: 2px solid var(--gray);
      border-radius: 5px;
      font-size: 1.2rem;
      color: var(--black);
      font-family: "Inter", sans-serif;
      text-align: center;
      outline: none;
    }

    button {
      padding: 0.5rem;
      border: none;
      background-color: var(--blue);
      border-radius: 5px;
      cursor: pointer;
      color: var(--white);
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1.5rem;
      transition: 0.3s;

      &:hover {
        background-color: var(--dark-blue);
      }
    }
  }
`;

export const H1 = styled.h1<h1Props>`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--black);
  font-family: "Inter", sans-serif;
  margin-bottom: 2rem;
  display: ${(props) => props.display};
`;
