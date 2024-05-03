import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "components/input";
import { Label } from "components/label";
import * as S from "./emailForm.style";

interface EmailFormProps {
  email: {
    subject: string;
    body: string;
  };
  onUpdate: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const EmailForm = ({ email, onUpdate }: EmailFormProps): JSX.Element => {
  const { t } = useTranslation("share", { keyPrefix: "email.form" });

  return (
    <S.FormContainer>
      <S.InputContainer>
        <Label content={t("subject")} htmlFor="subject" />
        <Input
          id="subject"
          name="subject"
          width="500px"
          value={email.subject}
          valid
          onChange={onUpdate}
        />
      </S.InputContainer>
      <S.InputContainer>
        <Label content={t("body")} htmlFor="body" />
        <textarea
          id="body"
          name="body"
          value={email.body}
          onChange={onUpdate}
          style={{
            padding: 10,
            minHeight: 150,
            background: "transparent",
            color: "#ddd",
          }}
        />
        {/* <Input id="body" name="body" width="500px" value={email.body} valid onChange={onUpdate} /> */}
      </S.InputContainer>
    </S.FormContainer>
  );
};
