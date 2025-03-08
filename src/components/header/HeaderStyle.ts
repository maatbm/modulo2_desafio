import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0.5rem;

  img {
    width: 170px;
    height: auto;
  }
`;
