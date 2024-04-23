import { ConfirmIcon } from "assets/icons";
import * as S from "./form.style";

export const Confirm = (): JSX.Element => (
  <S.IconContainer>
    <ConfirmIcon width={20} height={20} stroke="green" />
  </S.IconContainer>
);
