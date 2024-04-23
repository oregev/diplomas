import { Button } from "components/button";
import * as S from "./formFooter.style";

interface FormFooterProps {
  disabled: boolean;
  onClose: () => void;
  onClear: () => void;
  onGenerate: () => void;
}

export const FormFooter = ({
  disabled,
  onClose,
  onClear,
  onGenerate,
}: FormFooterProps): JSX.Element => {
  return (
    <S.FormFooter>
      <Button text="Close" onClick={onClose} variant="base" width="100px" height="40px" />
      <Button text="Clear" onClick={onClear} variant="danger" width="100px" height="40px" />
      <Button
        text="Generate"
        onClick={onGenerate}
        variant={disabled ? "disabled" : "secondary"}
        width="100px"
        height="40px"
      />
    </S.FormFooter>
  );
};
