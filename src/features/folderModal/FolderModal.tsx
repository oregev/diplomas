import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ConfirmIcon, ErrorIcon } from "assets/icons";
import { ICourse } from "api/courses";
import { Button } from "components/button";
import { Input } from "components/input";
import { Label } from "components/label";
import * as S from "./folderModal.style";

interface TemplatePreviewProps {
  courses: ICourse[];
  onClose: () => void;
  onCreate: (name: string) => void;
}

export const FolderModal = ({ courses, onClose, onCreate }: TemplatePreviewProps): JSX.Element => {
  const { t } = useTranslation("actions", { keyPrefix: "folder.modal" });
  const [folderName, setFolderName] = useState<string>("");

  const isExist = !!courses?.find((course) => course.name === folderName);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Content>{t("title")}</S.Content>
      </S.TitleContainer>
      <S.BodyContainer>
        <S.InputContainer>
          <Label htmlFor="courseName" content={t("label")} style={{ marginBottom: 3 }} />
          <Input
            id="courseName"
            name="courseName"
            type="text"
            maxLength={100}
            placeholder={t("placeholder")}
            value={folderName}
            valid={!folderName || !isExist}
            onChange={(e) => setFolderName(e.target.value)}
          />
          {!isExist && !!folderName && (
            <S.IconContainer>
              <ConfirmIcon width={20} height={20} stroke="green" />
            </S.IconContainer>
          )}
          {isExist && (
            <S.IconContainer>
              <ErrorIcon width={20} height={20} stroke="red" />
            </S.IconContainer>
          )}
          {isExist ? <S.Warning>{t("error")}</S.Warning> : <div style={{ height: "18px" }} />}
        </S.InputContainer>
        <S.Helper>{t("warning")}</S.Helper>
      </S.BodyContainer>
      <S.FooterContainer>
        <Button
          text={t("buttons.cancel")}
          onClick={onClose}
          variant="base"
          width="100px"
          height="30px"
        />
        <Button
          text={t("buttons.create")}
          onClick={() => onCreate(folderName)}
          variant={!folderName || isExist ? "disabled" : "secondary"}
          width="100px"
          height="30px"
        />
      </S.FooterContainer>
    </S.Container>
  );
};
