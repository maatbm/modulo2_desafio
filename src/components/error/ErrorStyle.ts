import styled from "styled-components";

export const ErrorContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 1.5rem;
  padding: 0.5rem;

  img {
    width: 50px;
    height: 50px;
  }

  h3, p {
    color: ${(props) => props.theme.colors.white};
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  @media screen and (max-width: 600px){
    width: 90%;
  }
`;
