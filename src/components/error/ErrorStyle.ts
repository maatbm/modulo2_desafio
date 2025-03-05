import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 1.5rem;

  img {
    width: 80px;
    height: 80px;
  }

  h2,
  p {
    color: ${(props) => props.theme.colors.white};
  }

  div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }
`;
