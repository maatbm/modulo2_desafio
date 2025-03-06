import styled from "styled-components";

interface Props {
  $display_container?: boolean;
  $display_h1?: boolean;
}

export const Container = styled.div<Props>`
  display: ${(props) => (props.$display_container === true ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 80%;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.black};
    font-family: "Inter", sans-serif;
    margin-bottom: 2rem;
    display: ${(props) => (props.$display_h1 === true ? "none": "block")};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    label {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.colors.black};
      font-family: "Inter", sans-serif;
    }

    input {
      width: 100%;
      height: 2rem;
      border: 2px solid ${(props) => props.theme.colors.gray};
      border-radius: 5px;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.black};
      font-family: "Inter", sans-serif;
      text-align: center;
      outline: none;
    }

    button {
      padding: 0.5rem;
      border: none;
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 5px;
      cursor: pointer;
      color: ${(props) => props.theme.colors.white};
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1.5rem;
      transition: 0.3s;

      &:hover {
        background-color: ${(props) => props.theme.colors.dark_blue};
      }
    }
  }

  @media screen and (max-width: 481px) {
    width: 85%;
  }

  @media screen and (min-width: 481px) and (max-width: 857px) {
    input {
      &::placeholder {
        font-size: 0.5rem;
      }
    }
  }
`;

