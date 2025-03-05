import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  gap: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.black};

  @media screen and (max-width: 719px) {
    width: 100%;
    padding: 0.6rem;
    flex-direction: column;
  }

  @media screen and (min-width: 719px) and (max-width: 1120px) {
    width: 100%;
    padding: 0.6rem;
  }
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

  @media screen and (max-width: 719px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (min-width: 719px) and (max-width: 1120px) {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const AboutContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1120px) and (min-width: 719px) {
    padding: 0.8rem;
  }
`;
  