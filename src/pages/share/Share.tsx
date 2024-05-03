import { useContext } from "react";
import { AppContext } from "AppContext";
import { useTemplates } from "api/useTemplates";
import { NoData } from "features/noData";
import { Email } from "./email";
import { Download } from "./download";
import * as S from "./share.style";

export const Share = (): JSX.Element => {
  const { getTemplate } = useTemplates();
  const { students, selectedTemplate } = useContext(AppContext);
  const template = getTemplate(selectedTemplate.course, selectedTemplate.id);

  return (
    <S.Container>
      {template && students.length > 0 ? (
        <>
          <Email template={template} students={students} />
          <Download template={template} students={students} />
        </>
      ) : (
        <S.NoDataWrapper>
          <NoData template={template} students={students} />
        </S.NoDataWrapper>
      )}
    </S.Container>
  );
};
