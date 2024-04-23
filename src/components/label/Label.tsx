import { LabelHTMLAttributes } from "react";
import * as S from "./Label.style";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  content: string;
}

export const Label = ({ content, ...props }: LabelProps): JSX.Element => (
  <S.Label {...props}>{content}</S.Label>
);
