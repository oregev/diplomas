import { AppRoutes } from "router";
import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";
import { Link } from "components/link";
import * as S from "./noData.style";

interface NoDataProps {
  template?: DiplomaMetaData;
  students: IStudent[];
}

export const NoData = ({ template, students }: NoDataProps): JSX.Element => (
  <>
    {!template && (
      <S.Container>
        <p style={{ marginBottom: 10 }}>No template was selected !</p>
        <Link
          variant="secondary"
          text="select template"
          to={`/${AppRoutes.HOME}`}
          state={{ index: 0 }}
        />
      </S.Container>
    )}
    <br />
    {(!students || students.length === 0) && (
      <S.Container>
        <p style={{ marginBottom: 10 }}>No students !</p>
        <Link
          variant="secondary"
          text="upload files"
          to={`/${AppRoutes.UPLOAD}`}
          state={{ index: 2 }}
        />
      </S.Container>
    )}
  </>
);
