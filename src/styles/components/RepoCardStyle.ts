import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px var(--black);
  padding: 1rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  hr {
    border: 3px solid var(--blue);
  }

  div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--light-gray);
  }
`;