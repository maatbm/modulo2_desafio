import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  gap: 0.5rem;
  padding: 1rem;

  img {
    width: 40px;
    height: 40px;
    margin-left: 2rem;
    transiton: 0.5s;

    @media screen and (max-width: 481px){
      margin-left: 0.5rem;
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.blue};
    font-family: "Quicksand", sans-serif;
  }

  #goBack {
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
