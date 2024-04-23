import { InputHTMLAttributes } from "react";
import * as S from "./toggler.style";

interface TogglerProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Toggler = ({ ...props }: TogglerProps): JSX.Element => (
  <S.Toggler type="checkbox" {...props} />
);
