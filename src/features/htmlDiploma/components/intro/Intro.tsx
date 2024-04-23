import text from "i18n/intro.json";
import * as S from "./intro.style";

interface IntroProps {
  name: string;
  id: string;
}

export const Intro = ({ name, id }: IntroProps): JSX.Element => (
  <S.OpeningContainer>
    <S.Pre>{text.pre}</S.Pre>
    <S.Title>{text.title}</S.Title>
    <S.Name>{name}</S.Name>
    <S.Id>{`${id} ${text.id}`}</S.Id>
  </S.OpeningContainer>
);
