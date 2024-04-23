import styled, { css } from "styled-components";

export const Input = styled.input<{ $width: string; $height: string; $valid: boolean }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 0 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  outline: none;

  direction: rtl;

  &::placeholder {
    color: ${({ theme }) => theme.label};
  }

  ${({ $valid, theme }) =>
    $valid
      ? css`
          border: 1px solid ${theme.border};
        `
      : css`
          border: 1px solid red;
        `}
`;
