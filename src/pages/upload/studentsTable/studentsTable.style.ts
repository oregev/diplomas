import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 1rem;
  box-shadow: 0.3rem 0.3rem 0.5rem var(--shadow);
`;

export const Delete = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  :hover {
    opacity: 0.8;
  }
`;

export const Email = styled.div<{ $isValid: boolean }>`
  border-radius: 5px;
  background: ${({ $isValid, theme }) => ($isValid ? theme.background : "rgb(255, 158, 158)")};
`;
