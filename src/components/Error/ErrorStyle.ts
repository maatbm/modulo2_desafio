import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: var(--orange);
  border-radius: 1.5rem;

  h2, p {
    color: var(--white);
  }
`;
