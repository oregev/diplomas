import { useTranslation } from "react-i18next";
import * as S from "./footer.style";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation("footer");

  return (
    <S.FooterContainer>
      <p>{t("build")}</p>
    </S.FooterContainer>
  );
};
