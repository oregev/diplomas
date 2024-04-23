import { ReactNode } from "react";
import * as S from "./link.style";

export type LinkVariants = "primary" | "secondary" | "danger" | "disabled" | "box";

interface LinkProps {
  to: string;
  state?: Record<string, number | string>;
  text?: string;
  variant?: LinkVariants;
  width?: string;
  height?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Link = ({
  to,
  state,
  text = "",
  variant = "primary",
  width = "200px",
  height = "40px",
  children,
  onClick,
}: LinkProps): JSX.Element => (
  <S.StyledLink
    to={to}
    state={state}
    $variant={children ? "box" : variant}
    $width={children ? "initial" : width}
    $height={children ? "initial" : height}
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
  >
    {children ?? <S.LinkText>{text}</S.LinkText>}
  </S.StyledLink>
);
