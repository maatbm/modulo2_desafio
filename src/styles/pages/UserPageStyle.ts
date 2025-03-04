import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--light-blue);
  padding: 2rem 3rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  padding: 3rem;
  background-color: var(--white);
  box-shadow: 0px 0px 10px var(--black);

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--black);
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
`;

export const ReposContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  
  > div {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;