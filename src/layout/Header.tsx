import { Menu } from "./menu";
import * as S from "./layout.style";

export const Header = (): JSX.Element => (
  <S.HeaderContainer>
    <Menu />
  </S.HeaderContainer>
);
