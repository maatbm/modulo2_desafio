import styled, { css } from "styled-components";

interface RepoCardContainerProps {
  $display_div?: boolean;
  $direction?: "next" | "prev" | null;
}

export const ReposContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: auto;

    span {
      font-weight: 400;
      color: ${(props) => props.theme.colors.gray};
    }
  }

  @media screen and (max-width: 719px) {
    h1 {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;

export const NavButton = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: transparent;
  border: none;

  img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 719px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const RepoCardContainer = styled.div<RepoCardContainerProps>`
  width: 100%;
  height: 100%;
  display: ${({ $display_div }) => ($display_div ? "none" : "grid")};
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  & > * {
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    box-sizing: border-box;
  }

  ${(props) =>
    props.$direction === "next" &&
    css`
      & > * {
        animation-name: slideInFromRight;
      }
    `}

  ${(props) =>
    props.$direction === "prev" &&
    css`
      & > * {
        animation-name: slideInFromLeft;
      }
    `}

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 719px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 720px) and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;