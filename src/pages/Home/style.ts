import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .LogoContainer {
    width: 63%;
    height: 100%;
    background-color: var(--blue);
  }

  .InputContainer {
    width: 37%;
    height: 100%;
    background-color: var(--white);
  }
`;
