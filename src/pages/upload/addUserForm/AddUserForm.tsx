import { ChangeEvent } from "react";
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

export const AddUserForm = ({ student, onChange }: AddUserFormProps): JSX.Element => (
  <S.FormContainer>
    <S.TitleContainer>
      <S.Content>Add a student</S.Content>
    </S.TitleContainer>
    <S.InputContainer $marginBottom>
      <Label htmlFor="first" content="First name" />
      <Input
        id="first"
        name="first"
        type="text"
        maxLength={100}
        placeholder="Add first name.."
        valid
        value={student.first}
        onChange={onChange}
      />
      {!!student.first && <Confirm />}
    </S.InputContainer>
    <S.InputContainer $marginBottom>
      <Label htmlFor="last" content="Last name" />
      <Input
        id="last"
        name="last"
        type="text"
        maxLength={100}
        placeholder="Add last name.."
        valid
        value={student.last}
        onChange={onChange}
      />
      {!!student.last && <Confirm />}
    </S.InputContainer>
    <S.InputContainer $marginBottom>
      <Label htmlFor="studentId" content="Student id" />
      <Input
        id="studentId"
        name="studentId"
        type="text"
        maxLength={100}
        placeholder="Add id.."
        valid={
          !student.studentId || student.studentId.length === 8 || student.studentId.length === 9
        }
        value={student.studentId}
        onChange={onChange}
      />
      {(!!student.studentId && student.studentId.length === 8) ||
        (student.studentId.length === 9 && <Confirm />)}
      {(student.studentId && student.studentId.length < 8) || student.studentId.length > 9 ? (
        <Error message="Invalid ID, Id must be 8-9 digits long!" />
      ) : (
        <div style={{ height: 18 }} />
      )}
    </S.InputContainer>
    <S.InputContainer $marginBottom>
      <Label htmlFor="grade" content="Grade" />
      <S.Range
        id="grade"
        name="grade"
        type="range"
        min="0"
        max="100"
        value={student.grade}
        onChange={onChange}
      />
      {!!student.grade && <Confirm top={16} />}
    </S.InputContainer>
    <S.InputContainer $marginBottom>
      <Label htmlFor="email" content="Email" />
      <Input
        id="email"
        name="email"
        type="email"
        maxLength={100}
        placeholder="Add email.."
        value={student.email}
        valid={!student.email || getIsValidEmail(student.email)}
        onChange={onChange}
      />
      {!!student.email && getIsValidEmail(student.email) && <Confirm />}
      {student.email && !getIsValidEmail(student.email) ? (
        <Error message="Invalid email, must have `@` and `.`!" />
      ) : (
        <div style={{ height: 18 }} />
      )}
    </S.InputContainer>
    <S.InputContainer>
      <Label htmlFor="gender" content="Gender" />
      <S.Select id="gender" name="gender" onChange={onChange} defaultValue={student.gender}>
        <option value="">select Gender</option>
        <option value={"F"}>Female</option>
        <option value={"M"}>Male</option>
      </S.Select>
      {!!student.gender && <Confirm />}
    </S.InputContainer>
  </S.FormContainer>
);
