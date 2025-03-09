import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${(props)=>props.theme.colors.light_gray};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;