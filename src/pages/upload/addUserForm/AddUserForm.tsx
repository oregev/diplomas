import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { IStudent } from "AppContext";
import { Label } from "components/label";
import { Input } from "components/input";
import { Confirm } from "./Confirm";
import { Error } from "./Error";
import { getIsValidEmail } from "../upload.utils";
import * as S from "./addUserForm.style";

interface AddUserFormProps {
  student: Omit<IStudent, "id">;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const AddUserForm = ({ student, onChange }: AddUserFormProps): JSX.Element => {
  const { t } = useTranslation("upload", { keyPrefix: "form" });

  return (
    <S.FormContainer>
      <S.TitleContainer>
        <S.Content>{t("title")}</S.Content>
      </S.TitleContainer>
      <S.InputContainer $marginBottom>
        <Label htmlFor="first" content={t("firstName")} />
        <Input
          id="first"
          name="first"
          type="text"
          maxLength={100}
          valid
          value={student.first}
          onChange={onChange}
        />
        {!!student.first && <Confirm />}
      </S.InputContainer>
      <S.InputContainer $marginBottom>
        <Label htmlFor="last" content={t("lastName")} />
        <Input
          id="last"
          name="last"
          type="text"
          maxLength={100}
          valid
          value={student.last}
          onChange={onChange}
        />
        {!!student.last && <Confirm />}
      </S.InputContainer>
      <S.InputContainer $marginBottom>
        <Label htmlFor="studentId" content={t("id.label")} />
        <Input
          id="studentId"
          name="studentId"
          type="number"
          maxLength={100}
          valid={
            !student.studentId || student.studentId.length === 8 || student.studentId.length === 9
          }
          value={student.studentId}
          onChange={onChange}
        />
        {(!!student.studentId && student.studentId.length === 8) ||
          (student.studentId.length === 9 && <Confirm />)}
        {(student.studentId && student.studentId.length < 8) || student.studentId.length > 9 ? (
          <Error message={t("id.error")} />
        ) : (
          <div style={{ height: 18 }} />
        )}
      </S.InputContainer>
      <S.InputContainer $marginBottom>
        <Label htmlFor="grade" content={t("grade")} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 400,
          }}
        >
          <S.Range
            id="grade"
            name="grade"
            type="range"
            min="0"
            max="100"
            value={student.grade === "" ? 0 : student.grade}
            onChange={onChange}
          />
          <S.Duration>({student.grade === "" ? 0 : student.grade})</S.Duration>
        </div>
        {!!student.grade && <Confirm top={16} />}
      </S.InputContainer>
      <S.InputContainer $marginBottom>
        <Label htmlFor="email" content={t("email.label")} />
        <Input
          id="email"
          name="email"
          type="email"
          maxLength={100}
          value={student.email}
          valid={!student.email || getIsValidEmail(student.email)}
          onChange={onChange}
        />
        {!!student.email && getIsValidEmail(student.email) && <Confirm />}
        {student.email && !getIsValidEmail(student.email) ? (
          <Error message={t("email.error")} />
        ) : (
          <div style={{ height: 18 }} />
        )}
      </S.InputContainer>
      <S.InputContainer>
        <Label htmlFor="gender" content={t("gender.label")} />
        <S.Select id="gender" name="gender" onChange={onChange} defaultValue={student.gender}>
          <option value="" />
          <option value={"F"}>{t("gender.female")}</option>
          <option value={"M"}>{t("gender.male")}</option>
        </S.Select>
        {!!student.gender && <Confirm />}
      </S.InputContainer>
    </S.FormContainer>
  );
};
