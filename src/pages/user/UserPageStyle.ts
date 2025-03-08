import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.light_gray};
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
