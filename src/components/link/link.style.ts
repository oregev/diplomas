import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { LinkVariants } from "./Link";

export const StyledLink = styled(Link)<{ $variant: LinkVariants; $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  font-size: ${({ $height }) => ($height < "40px" ? 12 : 14)}px;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3ms;

  &:hover {
    opacity: 0.8;
  }

  ${({ $variant }) => {
    if ($variant === "primary") {
      return css`
        border: none;
        background: green;
        color: ${({ theme }) => theme.filledButton};
        cursor: pointer;
      `;
    }
    if ($variant === "secondary") {
      return css`
        border: none;
        background: rgb(61, 121, 176);
        color: ${({ theme }) => theme.filledButton};
        cursor: pointer;
      `;
    }
    if ($variant === "danger") {
      return css`
        border: none;
        background: #ff9d9a;
        color: ${({ theme }) => theme.filledButton};
        cursor: pointer;
      `;
    }
    if ($variant === "disabled") {
      return css`
        border: 1.5px solid lightgray;
        background: transparent;
        color: ${({ theme }) => theme.disabled};
        cursor: not-allowed;
      `;
    }
    if ($variant === "box") {
      return css`
        color: inherit;
        cursor: pointer;
      `;
    }
  }}

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkText = styled.p`
  text-transform: capitalize;
`;
