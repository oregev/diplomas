import { AppRoutes } from "router";
import { Link } from "components/link";
import { AddIcon, HomeIcon, PreviewIcon, ShareIcon, UploadIcon } from "assets/icons";
import * as S from "./actionBar.styles";
import { useTranslation } from "react-i18next";

interface NavigatorProps {
  onEditor: () => void;
}

export const Navigator = ({ onEditor }: NavigatorProps): JSX.Element => {
  const { t } = useTranslation("menu");

  return (
    <S.IconsContainer>
      <S.IconContainer title={t("home")}>
        <Link to={`/${AppRoutes.HOME}`}>
          <HomeIcon width={25} height={25} fill="#fff" />
        </Link>
      </S.IconContainer>
      <S.IconContainer title={t("editor")}>
        <Link to={`/${AppRoutes.EDITOR}`} onClick={onEditor}>
          <AddIcon width={25} height={25} stroke="#fff" />
        </Link>
      </S.IconContainer>
      <S.IconContainer title={t("upload")}>
        <Link to={`/${AppRoutes.UPLOAD}`}>
          <UploadIcon width={25} height={25} stroke="#fff" />
        </Link>
      </S.IconContainer>
      <S.IconContainer title={t("preview")}>
        <Link to={`/${AppRoutes.PREVIEW}`}>
          <PreviewIcon width={25} height={25} stroke="#fff" />
        </Link>
      </S.IconContainer>
      <S.IconContainer title={t("share")}>
        <Link to={`/${AppRoutes.SHARE}`}>
          <ShareIcon width={25} height={25} stroke="#fff" />
        </Link>
      </S.IconContainer>
    </S.IconsContainer>
  );
};
