import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--black);
`;

export const AvatarContainer = styled.div`
  width: 20%;
  height: 100%;

  img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
    padding: 0;
    margin: 0;
  }
`;

export const AboutContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--black);
    margin-bottom: 1rem;
  }
`;
