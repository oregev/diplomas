import footerImage from "assets/bottomBanner.png";
import text from "i18n/footer.json";
import * as S from "./footer.style";

export const Footer = (): JSX.Element => (
  <>
    <S.CloserContainer>
      <p style={{ fontSize: 12 }}>{text.text}</p>
    </S.CloserContainer>
    <S.FooterContainer>
      <S.FooterImage src={footerImage} />
    </S.FooterContainer>
  </>
);
