import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { EditIcon, SelectIcon, TrashIcon } from "assets/icons";
import { Input } from "components/input";
import * as S from "./collapseCard.style";

interface TitleProps {
  name: string;
  onRename: (name: string) => void;
  onDelete: () => void;
}

export const Title = ({ name, onRename, onDelete }: TitleProps): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation("home", { keyPrefix: "title" });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return isEdit ? (
    <S.TitleContainer $isEdit={isEdit}>
      <Input
        id="courseName"
        name="courseName"
        type="text"
        height="28px"
        maxLength={200}
        value={name}
        onChange={(e) => onRename(e.target.value)}
      />
      <S.ClickContainer
        title={t("confirm")}
        onClick={(e) => {
          e.stopPropagation();
          setIsEdit(false);
        }}
      >
        <SelectIcon width={18} height={18} stroke={theme.icon} />
      </S.ClickContainer>
    </S.TitleContainer>
  ) : (
    <S.TitleContainer>
      <S.Title>{name}</S.Title>
      <S.ClickContainer
        title={t("edit")}
        style={{ marginInlineEnd: 5 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsEdit(true);
        }}
      >
        <EditIcon width={18} height={18} fill={theme.icon} />
      </S.ClickContainer>
      <S.ClickContainer
        title={t("delete")}
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <TrashIcon width={18} height={18} fill={theme.icon} />
      </S.ClickContainer>
    </S.TitleContainer>
  );
};
