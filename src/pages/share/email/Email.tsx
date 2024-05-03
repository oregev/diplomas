import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { AlertIcon } from "assets/icons";
import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";
import { Button } from "components/button";
import { EmailForm } from "./emailForm";
import { handleSendEmail } from "./email.utils";
import {
  BODY_PARAM_ID,
  BODY_POSTFIX,
  BODY_PREFIX,
  SUBJECT_PARAM_ID,
  SUBJECT_PREFIX,
} from "./email.config";
import * as S from "./email.style";

interface EmailProps {
  template: DiplomaMetaData;
  students: IStudent[];
}

export const Email = ({ template, students }: EmailProps): JSX.Element => {
  const { t } = useTranslation("share", { keyPrefix: "email" });

  const date = template?.start
    ? format(new Date(template?.start ?? ""), "MMMM, yyyy", { locale: he })
    : "";
  const subject = `${SUBJECT_PREFIX} ${template?.courseName} ${date} - ${template?.lecturer}`;
  const body = BODY_PREFIX + template?.courseName + BODY_POSTFIX + template?.lecturer;

  const [email, setEmail] = useState<{
    subject: string;
    body: string;
  }>({
    subject,
    body,
  });

  const handleEmailUpdate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setEmail((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <S.Container>
      <S.Title>{t("title")}</S.Title>
      <EmailForm email={email} onUpdate={handleEmailUpdate} />
      {template && students.length > 0 && (
        <>
          <Button
            width="140px"
            height="40px"
            variant="secondary"
            text={t("button")}
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
              {t("warning", { count: students.length })}
            </p>
            <AlertIcon width={20} height={20} stroke="red" />
          </S.EmailWarning>
        </>
      )}
    </S.Container>
  );
};
