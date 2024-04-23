import { ReactNode } from "react";
import * as S from "./button.style";

export type ButtonVariants = "base" | "primary" | "secondary" | "danger" | "disabled" | "box";

interface ButtonProps {
  text?: string;
  variant?: ButtonVariants;
  width?: string;
  height?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  text = "",
  variant = "base",
  width,
  height,
  children,
  onClick,
}: ButtonProps): JSX.Element => (
  <S.StyledButton
    $variant={children ? "box" : variant}
    $width={width}
    $height={height}
    disabled={variant === "disabled"}
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
  >
    {children ?? <S.ButtonText>{text}</S.ButtonText>}
  </S.StyledButton>
);
