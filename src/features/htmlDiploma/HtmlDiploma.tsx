import { DiplomaMetaData } from "types/common.types";
import { IStudent } from "AppContext";
import topBanner from "assets/topBanner.png";
import { Intro } from "./components/intro";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Signature } from "./components/signature";
import * as S from "./htmlDiploma.style";

interface HtmlDiplomaProps {
  student: Omit<IStudent, "approved" | "studentId">;
  metaData: Omit<DiplomaMetaData, "id">;
}

export const HtmlDiploma = ({ student, metaData }: HtmlDiplomaProps): JSX.Element => (
  <S.Container>
    <S.HeaderContainer>
      <S.HeaderImage src={topBanner} />
    </S.HeaderContainer>
    <Intro name={`${student.first} ${student.last}`} id={student.id} />
    <Body student={student} metaData={metaData} />
    <Signature lecturer={metaData.lecturer} signature={metaData.signature} />
    <Footer />
  </S.Container>
);
