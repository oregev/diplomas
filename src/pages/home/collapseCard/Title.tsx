import { useState } from "react";
import { useTheme } from "styled-components";
import { EditIcon, SelectIcon, TrashIcon } from "assets/icons";
import * as S from "./collapseCard.style";
import { Input } from "components/input";

interface TitleProps {
  name: string;
  onRename: (name: string) => void;
  onDelete: () => void;
}

export const Title = ({ name, onRename, onDelete }: TitleProps): JSX.Element => {
  const theme = useTheme();
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
        title="confirm edit"
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
        title="edit name"
        style={{ marginInlineEnd: 5 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsEdit(true);
        }}
      >
        <EditIcon width={18} height={18} fill={theme.icon} />
      </S.ClickContainer>
      <S.ClickContainer
        title="delete course"
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
