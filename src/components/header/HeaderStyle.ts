import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;

  img {
    width: 190px;
    height: auto;

    @media screen and (max-width: 481px){
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 481px){
    padding: 0.5rem;
  }
`;
