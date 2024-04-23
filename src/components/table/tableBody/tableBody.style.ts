import styled from "styled-components";

export const TBody = styled.tbody``;

export const TRow = styled.tr``;

export const TData = styled.th`
  width: 100px;
  padding: 5px;
  text-transform: capitalize;

  color: ${({ theme }) => theme.text};
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  border-bottom: 1px solid ${({ theme }) => theme.border};
`;
