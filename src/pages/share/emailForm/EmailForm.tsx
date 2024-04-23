import { ChangeEvent } from "react";
import { Input } from "components/input";
import { Label } from "components/label";
import * as S from "./emailForm.style";

interface EmailFormProps {
  email: {
    subject: string;
    body: string;
  };
  onUpdate: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EmailForm = ({ email, onUpdate }: EmailFormProps): JSX.Element => (
  <S.FormContainer>
    <S.InputContainer>
      <Label content="subject" htmlFor="subject" />
      <Input id="subject" name="subject" value={email.subject} valid onChange={onUpdate} />
    </S.InputContainer>
    <S.InputContainer>
      <Label content="body" htmlFor="body" />
      <Input id="body" name="body" value={email.body} valid onChange={onUpdate} />
    </S.InputContainer>
  </S.FormContainer>
);
