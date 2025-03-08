import styled from "styled-components";

interface display {
  $display_div?: boolean;
}

export const ReposContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  display: block;
`;

export const RepoCardContainer = styled.div<display>`
  width: 100%;
  height: 100%;
  display: ${({ $display_div }) => ($display_div ? "none" : "grid")};
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 719px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 719px) and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
