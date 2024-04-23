import { useContext } from "react";
import { AppContext } from "AppContext";
import { useTemplates } from "api/useTemplates";
import { AlertIcon } from "assets/icons";
import { PdfDiploma } from "features/pdfDiploma";
import { NoData } from "features/noData";
import { Button } from "components/button";
// import { EmailForm } from "./emailForm";
import { handleDownloadPdf, handleSendEmail } from "./share.utils";
import * as S from "./share.style";

export const Share = (): JSX.Element => {
  const { getTemplate } = useTemplates();
  const { students, selectedTemplate } = useContext(AppContext);

  const template = getTemplate(selectedTemplate.course, selectedTemplate.id);
  const diplomas = template
    ? students.map((student, index) => (
        <PdfDiploma key={index} student={student} metaData={template} />
      ))
    : [];

  return (
    <S.Container>
      {template && students.length > 0 ? (
        <>
          <S.LeftSection>
            <S.Title>Email</S.Title>

            {template && students.length > 0 && (
              <>
                <Button
                  width="140px"
                  height="40px"
                  variant="secondary"
                  text="Open email"
                  onClick={() => handleSendEmail(students, template)}
                />
                <S.EmailWarning>
                  <p style={{ fontSize: 12, color: "#999" }}>
                    {`Clicking this button will open ${diplomas.length} email window${
                      diplomas.length > 1 ? "s" : ""
                    }`}
                  </p>
                  <AlertIcon width={20} height={20} stroke="red" />
                </S.EmailWarning>
              </>
            )}

            {/* <EmailForm /> */}
          </S.LeftSection>
          <S.RightSection>
            <S.Title>Download</S.Title>
            {template && students.length > 0 && (
              <>
                <p>You have {diplomas.length} diplomas to download!</p>
                <div style={{ marginTop: 20 }}>
                  <Button
                    width="140px"
                    height="40px"
                    variant="secondary"
                    text="download"
                    onClick={() => handleDownloadPdf(diplomas, students)}
                  />
                </div>
              </>
            )}
          </S.RightSection>
        </>
      ) : (
        <S.NoDataWrapper>
          <NoData template={template} students={students} />
        </S.NoDataWrapper>
      )}
    </S.Container>
  );
};
