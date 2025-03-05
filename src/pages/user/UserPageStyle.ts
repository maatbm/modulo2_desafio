import styled from "styled-components";

interface display {
  $display_div?: boolean;
}

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.light_blue};
  padding: 2rem 3rem;

  @media screen and (max-width: 719px) {
    padding: 1rem 0.7rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.black};

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 719px) {
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    > div {
      padding: 1rem;
    }
  }
`;

export const ReposContainer = styled.div<display>`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  display: block;

  #RepoCard {
    width: 100%;
    height: 100%;
    display: ${({ $display_div }) => ($display_div ? "none" : "grid")};
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media screen and (max-width: 719px) {
      grid-template-columns: 1fr;
    }

    @media screen and (min-width: 719px) and (max-width: 1120px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
