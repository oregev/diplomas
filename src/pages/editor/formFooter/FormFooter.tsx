import { ConfirmIcon } from "assets/icons";
import { Button } from "components/button";
import * as S from "./formFooter.style";

interface FormFooterProps {
  disabled: boolean;
  generated: boolean;
  isNew: boolean;
  onClear: () => void;
  onGenerate: () => void;
}

export const FormFooter = ({
  disabled,
  generated,
  isNew,
  onClear,
  onGenerate,
}: FormFooterProps): JSX.Element => {
  return (
    <S.FormFooter>
      <Button text="Clear" onClick={onClear} variant="base" width="140px" height="40px" />
      <Button
        text={isNew ? "Generate" : "update"}
        onClick={onGenerate}
        variant={disabled ? "disabled" : "secondary"}
        width="140px"
        height="40px"
      />
      <S.IconContainer>
        {generated && <ConfirmIcon width={20} height={20} stroke="green" />}
      </S.IconContainer>
    </S.FormFooter>
  );
};
