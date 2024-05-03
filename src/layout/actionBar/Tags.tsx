import { useTranslation } from "react-i18next";
import { AppRoutes } from "router";
import { Link } from "components/link";
import * as S from "./actionBar.styles";

interface TagsProps {
  hasTemplate: boolean;
  hasStudents: boolean;
  isVerified: boolean;
}

export const Tags = ({ hasTemplate, hasStudents, isVerified }: TagsProps): JSX.Element => {
  const { t } = useTranslation("actions");

  return (
    <S.TagsContainer>
      <Link to={hasTemplate ? "#" : `/${AppRoutes.HOME}`}>
        <S.Tag $isOn={hasTemplate}>{t("tags.template")}</S.Tag>
      </Link>
      <Link to={hasStudents ? "#" : `/${AppRoutes.UPLOAD}`}>
        <S.Tag $isOn={hasStudents}>{t("tags.students")}</S.Tag>
      </Link>
      <Link to={isVerified ? "#" : `/${AppRoutes.UPLOAD}`}>
        <S.Tag $isOn={isVerified}>{t("tags.verify")}</S.Tag>
      </Link>
    </S.TagsContainer>
  );
};
