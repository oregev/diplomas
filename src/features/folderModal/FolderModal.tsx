import { useState } from "react";
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
  const [folderName, setFolderName] = useState<string>("");

  const isExist = !!courses?.find((course) => course.name === folderName);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Content>Create new course</S.Content>
      </S.TitleContainer>
      <S.BodyContainer>
        <S.InputContainer>
          <Label htmlFor="courseName" content="Course name" style={{ marginBottom: 3 }} />
          <Input
            id="courseName"
            name="courseName"
            type="text"
            maxLength={100}
            placeholder="Add name.."
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
          {isExist ? <S.Warning>course name exists</S.Warning> : <div style={{ height: "18px" }} />}
        </S.InputContainer>
        <S.Helper>
          Courses are like Folders in Diplomas and are here to help you stay organized.
        </S.Helper>
      </S.BodyContainer>
      <S.FooterContainer>
        <Button text="cancel" onClick={onClose} variant="base" width="100px" height="30px" />
        <Button
          text="Create"
          onClick={() => onCreate(folderName)}
          variant={!folderName || isExist ? "disabled" : "secondary"}
          width="100px"
          height="30px"
        />
      </S.FooterContainer>
    </S.Container>
  );
};
