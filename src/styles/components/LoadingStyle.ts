import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.7rem;
    color:${(props) => props.theme.colors.black};
  }

  > img {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    animation: ${spin} 1s linear infinite;
  }
`;
