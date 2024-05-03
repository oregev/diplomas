import signature2 from "assets/signature2.png";
import text from "i18n/signature.json";
import * as S from "./signature.style";

interface SignatureProps {
  signature: string | null;
  lecturer: string | null;
}

export const Signature = ({ signature, lecturer }: SignatureProps): JSX.Element => (
  <S.FooterContainer>
    <S.SignatureContainer>
      {signature ? <S.SignatureImage src={signature} /> : <div style={{ height: 50 }} />}
      <S.SignatureText>{lecturer}</S.SignatureText>
    </S.SignatureContainer>
    <S.SignatureContainer>
      <S.SignatureImage src={signature2} />
      <S.SignatureText>{text.right}</S.SignatureText>
    </S.SignatureContainer>
  </S.FooterContainer>
);
