import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    padding: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    @media screen and (max-width: 600px) {
    padding: 1rem 0.7rem;
  }
`;