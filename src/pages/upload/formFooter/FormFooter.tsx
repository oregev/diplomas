import { Button } from "components/button";
import * as S from "./formFooter.style";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("common", { keyPrefix: "buttons" });

  return (
    <S.FormFooter>
      <Button text={t("cancel")} onClick={onClose} variant="base" width="100px" height="36px" />
      <Button text={t("clear")} onClick={onClear} variant="danger" width="100px" height="36px" />
      <Button
        text={t("generate")}
        onClick={onGenerate}
        variant={disabled ? "disabled" : "secondary"}
        width="100px"
        height="36px"
      />
    </S.FormFooter>
  );
};
