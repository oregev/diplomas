import { ChangeEvent } from "react";
import { DiplomaMetaData } from "types/common.types";
import { ConfirmIcon } from "assets/icons";
import { ICourse } from "api/courses";
import { State } from "../editor.config";
import * as S from "./form.style";
import { Input } from "components/input";
import { Label } from "components/label";
import { Confirm } from "./Confirm";
import { useTranslation } from "react-i18next";

interface FromProps {
  content: State;
  template?: DiplomaMetaData;
  courses: ICourse[];
  courseId: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCourseChange: (id: string) => void;
}

export const Form = ({
  content,
  courses,
  courseId,
  template,
  onChange,
  onCourseChange,
}: FromProps): JSX.Element => {
  const { t } = useTranslation("editor", { keyPrefix: "form" });

  return (
    <S.FormContainer>
      <S.InputContainer>
        <Label htmlFor="courseName" content={t("name.label")} />
        <Input
          id="courseName"
          name="courseName"
          type="text"
          lang="he"
          maxLength={100}
          placeholder={t("name.placeholder")}
          valid
          value={content.courseName ?? template?.courseName ?? ""}
          onChange={onChange}
        />
        {!!content.courseName && <Confirm />}
      </S.InputContainer>
      <S.InputContainer>
        <Label htmlFor="courseDuration" content={t("duration")} />
        <S.RangeContainer>
          <S.Range
            id="courseDuration"
            name="courseDuration"
            type="range"
            min="0"
            max="80"
            value={content.courseDuration ?? template?.courseDuration ?? "0"}
            onChange={onChange}
          />
          <S.Duration>({content.courseDuration ?? template?.courseDuration ?? "0"})</S.Duration>
        </S.RangeContainer>
        {!!content.courseDuration && (
          <S.IconContainer style={{ top: 18 }}>
            <ConfirmIcon width={20} height={20} stroke="green" />
          </S.IconContainer>
        )}
      </S.InputContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <S.InputContainer>
          <Label htmlFor="start" content={t("dates.start")} />
          <S.Date
            id="start"
            name="start"
            type="date"
            max={content.end ?? template?.end ?? ""}
            value={content.start ?? template?.start ?? ""}
            onChange={onChange}
          />
          {!!content.start && <Confirm />}
        </S.InputContainer>
        <S.InputContainer>
          <Label htmlFor="end" content={t("dates.end")} />
          <S.Date
            id="end"
            name="end"
            type="date"
            min={content.start ?? template?.start ?? ""}
            value={content.end ?? template?.end ?? ""}
            onChange={onChange}
          />
          {!!content.end && <Confirm />}
        </S.InputContainer>
      </div>
      <S.InputContainer>
        <Label htmlFor="lecturer" content={t("lecturer.label")} />
        <Input
          id="lecturer"
          name="lecturer"
          type="text"
          maxLength={40}
          placeholder={t("lecturer.placeholder")}
          valid
          value={content.lecturer ?? template?.lecturer ?? ""}
          onChange={onChange}
        />
        {!!content.lecturer && <Confirm />}
      </S.InputContainer>
      <S.InputContainer>
        <Label htmlFor="course" content={t("course.label")} />
        <S.Select
          id="course"
          name="course"
          onChange={(event) => onCourseChange(event.target.value)}
          defaultValue={undefined}
        >
          <option value="">{t("course.placeholder")}</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </S.Select>
        {!!courseId && <Confirm />}
      </S.InputContainer>
      <S.CheckboxContainer>
        <S.Checkbox id="use" name="use" type="checkbox" checked={content.use} onChange={onChange} />
        <p>{t("checkbox.title")}</p>
      </S.CheckboxContainer>
      <span style={{ fontSize: 10, color: "#999" }}>({t("checkbox.warning")})</span>
    </S.FormContainer>
  );
};
