import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";
import text from "i18n/body.json";
import * as S from "./body.style";

interface HtmlDiplomaBodyProps {
  student: Omit<IStudent, "approved" | "studentId">;
  metaData: Omit<DiplomaMetaData, "id">;
}

export const Body = ({ student, metaData }: HtmlDiplomaBodyProps): JSX.Element => {
  const period = `
  ${format(new Date(metaData.start ?? ""), "MMMM, yyyy", { locale: he })} -
    ${format(new Date(metaData.end ?? ""), "MMMM, yyyy", { locale: he })} 
  `;

  return (
    <S.BodyContainer>
      <p style={{ fontSize: 18, marginBottom: 8 }}>{text.title[student.gender]}</p>
      <S.BoldText style={{ marginBottom: 14 }}>{metaData.courseName}</S.BoldText>
      <p style={{ fontSize: 18, marginBottom: 12 }}>
        {text.duration.pre} {metaData.courseDuration} {text.duration.post}
      </p>
      <S.DatesContainer>
        <p style={{ fontSize: 10 }}>
          {text.start}: {format(new Date(metaData.start ?? ""), "dd.MM.yyyy")}
        </p>
        <p style={{ fontSize: 10 }}>
          {text.end}: {format(new Date(metaData.end ?? ""), "dd.MM.yyyy")}
        </p>
        <p style={{ fontSize: 10 }}>{period}</p>
      </S.DatesContainer>
      {student.grade ? (
        <S.GradeContainer>
          <S.BoldText>{text.closer[student.gender]}</S.BoldText>
          <S.BoldText style={{ textDecoration: "underline", marginInline: 5 }}>
            {student.grade}
          </S.BoldText>
        </S.GradeContainer>
      ) : (
        <div style={{ height: 18 }} />
      )}
    </S.BodyContainer>
  );
};
