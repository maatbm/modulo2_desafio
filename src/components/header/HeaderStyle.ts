import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  gap: 0.5rem;
  padding: 1rem;

  img {
    width: 190px;
    height: auto;
    margin-left: 2rem;

    @media screen and (max-width: 481px){
      margin-left: 0.5rem;
    }
  }

  #goBack {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 481px){
    padding: 0.5rem;
  }
`;
