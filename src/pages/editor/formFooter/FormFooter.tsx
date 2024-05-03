import { useTranslation } from "react-i18next";
import { Button } from "components/button";
import * as S from "./formFooter.style";

interface FormFooterProps {
  disabled: boolean;
  isNew: boolean;
  onClear: () => void;
  onGenerate: () => void;
}

export const FormFooter = ({
  disabled,
  isNew,
  onClear,
  onGenerate,
}: FormFooterProps): JSX.Element => {
  const { t } = useTranslation("editor", { keyPrefix: "form.buttons" });

  return (
    <S.FormFooter>
      <Button text={t("clear")} onClick={onClear} variant="base" width="140px" height="40px" />
      <Button
        text={isNew ? t("generate") : t("update")}
        onClick={onGenerate}
        variant={disabled ? "disabled" : "secondary"}
        width="140px"
        height="40px"
      />
    </S.FormFooter>
  );
};
