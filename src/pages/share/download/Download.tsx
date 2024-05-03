import { useTranslation } from "react-i18next";
import { DiplomaMetaData } from "types/common.types";
import { IStudent } from "AppContext";
import { PdfDiploma } from "features/pdfDiploma";
import { Button } from "components/button";
import { handleDownloadPdf } from "./download.utils";
import * as S from "./download.style";

interface DownloadProps {
  template: DiplomaMetaData;
  students: IStudent[];
}

export const Download = ({ students, template }: DownloadProps): JSX.Element => {
  const { t } = useTranslation("share", { keyPrefix: "download" });

  const diplomas = template
    ? students.map((student, index) => (
        <PdfDiploma key={index} student={student} metaData={template} />
      ))
    : [];

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      {template && students.length > 0 && (
        <>
          <p style={{ fontSize: 12, color: "#999" }}>{t("warning", { count: students.length })}</p>
          <div style={{ marginTop: 20 }}>
            <Button
              width="140px"
              height="40px"
              variant="secondary"
              text={t("button")}
              onClick={() => handleDownloadPdf(diplomas, students)}
            />
          </div>
        </>
      )}
    </S.Container>
  );
};
