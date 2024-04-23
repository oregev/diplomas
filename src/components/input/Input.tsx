import { InputHTMLAttributes } from "react";
import * as S from "./input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  valid?: boolean;
}

export const Input = ({ width, height, valid, ...props }: InputProps): JSX.Element => (
  <S.Input {...props} $width={width ?? "400px"} $height={height ?? "40px"} $valid={!!valid} />
);
