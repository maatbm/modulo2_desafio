import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.black};
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  hr {
    border: 2px solid ${(props) => props.theme.colors.blue};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme.colors.light_gray};

    p {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors.gray};
      margin-bottom: 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.black};
      font-size: 0.8rem;
      word-break: break-all; 
      overflow-wrap: break-word;
      white-space: normal;
    }
  }
`;
