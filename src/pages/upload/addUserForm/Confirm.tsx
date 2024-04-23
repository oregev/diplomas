import { ConfirmIcon } from "assets/icons";
import * as S from "./addUserForm.style";

interface ConfirmProps {
  top?: number;
}

export const Confirm = ({ top }: ConfirmProps): JSX.Element => (
  <S.IconContainer $top={top}>
    <ConfirmIcon width={20} height={20} stroke="green" />
  </S.IconContainer>
);
