import { useState } from "react";
import { useTheme } from "styled-components";
import { AppRoutes } from "router";
import { getPeriod } from "utils";
import { EditIcon, TrashIcon, SelectIcon } from "assets/icons";
import { DiplomaMetaData } from "types/common.types";
import { DeleteModal } from "features/deleteModal";
import { Link } from "components/link";
import * as S from "./templateCard.style";
import { useTranslation } from "react-i18next";

interface TemplateCardProps {
  courseId: string;
  template: DiplomaMetaData;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TemplateCard = ({
  courseId,
  template,
  onEdit,
  onDelete,
}: TemplateCardProps): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation("home", { keyPrefix: "template" });
  const period = getPeriod(template.start ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDelete = (): void => {
    setIsOpen((prev) => !prev);
    onDelete(template.id);
  };

  return (
    <S.TemplateCardContainer>
      <S.Title>{period}</S.Title>
      <S.ActionBar>
        <S.IconContainer title={t("select")}>
          <Link to={`/${AppRoutes.UPLOAD}`} onClick={() => onEdit(template.id)}>
            <SelectIcon width={18} height={18} stroke={theme.icon} />
          </Link>
        </S.IconContainer>
        <S.IconContainer title={t("edit")}>
          <Link
            to={`/${AppRoutes.EDITOR}/${courseId}/${template.id}`}
            onClick={() => onEdit(template.id)}
          >
            <EditIcon width={18} height={18} fill={theme.icon} />
          </Link>
        </S.IconContainer>
        <S.IconContainer
          title={t("delete")}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <TrashIcon width={16} height={16} fill={theme.icon} />
        </S.IconContainer>
      </S.ActionBar>
      <DeleteModal
        isOpen={isOpen}
        onCancel={() => setIsOpen((prev) => !prev)}
        onDelete={handleDelete}
      />
    </S.TemplateCardContainer>
  );
};
