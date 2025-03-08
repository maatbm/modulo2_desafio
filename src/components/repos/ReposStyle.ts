import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.black};

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 1rem;
    font-family: "Quicksand", sans-serif;
  }

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;

    #title_container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: ${(props) => props.theme.colors.white};

      img {
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.5);
        }
      }
    }

    div {
      width: 65%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 10px ${(props) => props.theme.colors.black};

      hr {
        width: 100%;
        border: 1px solid ${(props) => props.theme.colors.gray};
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.black};
      }

      div {
        width: 100%;
        background-color: ${(props) => props.theme.colors.light_gray};
        box-shadow: none;
        gap: 0.5rem;

        p {
          font-size: 1rem;
          font-weight: 400;
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    > div {
      padding: 0.5rem;

      div {
        width: 100%;
        padding: 1rem;

        h2 {
          font-size: 1.2rem;
        }

        div {
          width: 100%;
          padding: 0.3rem;

          h4 {
            font-size: 1rem;
          }

          p {
            font-size: 0.6rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1120px) {
    width: 100%;
    padding: 1rem;

    > div {
      div {
        width: 100%;
        padding: 1rem;

        h2 {
          font-size: 1.2rem;
        }

        div {
          width: 100%;
        }
      }
    }
  }
`;
