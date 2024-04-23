import { ChangeEvent, useContext, useState } from "react";
import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { AppContext } from "AppContext";
import { useTemplates } from "api/useTemplates";
import { AlertIcon } from "assets/icons";
import { PdfDiploma } from "features/pdfDiploma";
import { NoData } from "features/noData";
import { Button } from "components/button";
import { EmailForm } from "./emailForm";
import { handleDownloadPdf, handleSendEmail } from "./share.utils";
import { BODY_PARAM_ID, BODY_PREFIX, SUBJECT_PARAM_ID, SUBJECT_PREFIX } from "./share.config";
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

  const date = template?.start
    ? format(new Date(template?.start ?? ""), "MMMM, yyyy", { locale: he })
    : "";
  const subject = `${SUBJECT_PREFIX} ${template?.courseName} ${date} - ${template?.lecturer}`;

  const [email, setEmail] = useState<{
    subject: string;
    body: string;
  }>({
    subject,
    body: BODY_PREFIX,
  });

  const handleEmailUpdate = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <S.Container>
      {template && students.length > 0 ? (
        <>
          <S.LeftSection>
            <S.Title>Email</S.Title>
            <EmailForm email={email} onUpdate={handleEmailUpdate} />
            {template && students.length > 0 && (
              <>
                <Button
                  width="140px"
                  height="40px"
                  variant="secondary"
                  text="Open email"
                  onClick={() =>
                    handleSendEmail({
                      students,
                      email: {
                        subject: `${SUBJECT_PARAM_ID}${email.subject}`,
                        body: BODY_PARAM_ID + encodeURIComponent(email.body),
                      },
                    })
                  }
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
