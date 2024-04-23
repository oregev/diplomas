import { ChangeEvent, useState } from "react";
import { Input } from "components/input";
import { Label } from "components/label";
import * as S from "./emailForm.style";

export const EmailForm = (): JSX.Element => {
  const [email, setEmail] = useState<{
    subject: string;
    body: string;
  }>({
    subject: "",
    body: "",
  });

  const handleEmailUpdate = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <S.FormContainer>
      <S.InputContainer>
        <Label content="subject" htmlFor="subject" />
        <Input id="subject" name="subject" value={email.subject} onChange={handleEmailUpdate} />
      </S.InputContainer>
      <S.InputContainer>
        <Label content="body" htmlFor="body" />
        <Input id="body" name="body" value={email.body} onChange={handleEmailUpdate} />
      </S.InputContainer>
    </S.FormContainer>
  );
};
