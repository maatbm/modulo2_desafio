import styled from "styled-components";

interface DivProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div<DivProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: var(${(props) => props.backgroundColor})};
`;
