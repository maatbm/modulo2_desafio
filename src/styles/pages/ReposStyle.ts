import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--light-blue);
  padding: 2rem 3rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 3rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px var(--black);

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 2rem;
    font-family: "Quicksand", sans-serif;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;

    div {
      width: 65%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 10px var(--black);

      hr {
        width: 100%;
        border: 3px solid var(--blue);
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--black);
      }

      div {
        width: 100%;
        background-color: var(--light-gray);
        box-shadow: none;
        gap: 0.5rem;

        p {
          font-size: 1rem;
          font-weight: 400;
          color: var(--black);
        }
      }
    }
  }
`;
