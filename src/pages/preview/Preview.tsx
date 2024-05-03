import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import { AppRoutes } from "router";
import { AppContext } from "AppContext";
import { ArrowIcon } from "assets/icons";
import { useTemplates } from "api/useTemplates";
import { HtmlDiploma } from "features/htmlDiploma";
import { NoData } from "features/noData";
import { Button } from "components/button";
import { Link } from "components/link";
import * as S from "./preview.style";

export const Preview = (): JSX.Element => {
  const theme = useTheme();
  const { t } = useTranslation("preview");
  const { getTemplate } = useTemplates();
  const [current, setCurrent] = useState(0);
  const { students, selectedTemplate } = useContext(AppContext);

  const template = getTemplate(selectedTemplate.course, selectedTemplate.id);

  const handleBack = (): void => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const handleNext = (): void => {
    if (current < students.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <S.Container>
      <NoData template={template} students={students} />
      {template && selectedTemplate.id && students.length > 0 && (
        <>
          <S.DiplomaContainer>
            <S.ButtonContainer>
              {current > 0 && (
                <Button variant="box" onClick={handleBack}>
                  <ArrowIcon width={150} height={150} stroke={theme.text} />
                </Button>
              )}
            </S.ButtonContainer>
            <HtmlDiploma
              student={{
                first: students[current]?.first ?? "name",
                last: students[current]?.last ?? "name",
                id: students[current]?.studentId ?? "id",
                grade: students[current]?.grade ?? 0,
                email: students[current]?.email ?? "email",
                gender: students[current]?.gender ?? "F",
              }}
              metaData={{
                courseName: template?.courseName ?? "",
                courseDuration: template?.courseDuration ?? "",
                start: template?.start ?? new Date().toString(),
                end: template?.end ?? new Date().toString(),
                period: template?.period ?? "",
                lecturer: template?.lecturer ?? "",
                signature: template?.signature ?? "",
              }}
            />
            <S.ButtonContainer>
              {current < students.length - 1 && (
                <Button variant="box" onClick={handleNext}>
                  <div style={{ transform: "rotate(180deg)" }}>
                    <ArrowIcon width={150} height={150} stroke={theme.text} />
                  </div>
                </Button>
              )}
            </S.ButtonContainer>
          </S.DiplomaContainer>
          <S.FooterContainer>
            <Link variant="secondary" text={t("share")} to={`/${AppRoutes.SHARE}`} />
          </S.FooterContainer>
        </>
      )}
    </S.Container>
  );
};
