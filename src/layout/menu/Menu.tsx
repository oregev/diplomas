import { useContext, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { AppRoutes } from "router";
import { useClickOutside } from "hooks";
import { AppContext } from "AppContext";
import { MenuIcon } from "assets/icons";
import { Toggler } from "components/toggler";
import * as S from "./menu.style";

export const Menu = (): JSX.Element => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  const { theme: mode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useClickOutside(ref, () => setIsOpen(false));

  return (
    <S.Container ref={ref}>
      <S.IconContainer onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon width={25} height={25} stroke={theme.icon} />
      </S.IconContainer>
      {isOpen && (
        <S.MenuContainer>
          <S.StyledLink to={`/${AppRoutes.HOME}`} onClick={() => setIsOpen(false)}>
            {AppRoutes.HOME}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.EDITOR}`} onClick={() => setIsOpen(false)}>
            {AppRoutes.EDITOR}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.UPLOAD}`} onClick={() => setIsOpen(false)}>
            {AppRoutes.UPLOAD}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.PREVIEW}`} onClick={() => setIsOpen(false)}>
            {AppRoutes.PREVIEW}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.SHARE}`} onClick={() => setIsOpen(false)}>
            {AppRoutes.SHARE}
          </S.StyledLink>
          <S.ActionsContainer>
            <p style={{ opacity: 0.7 }}>Dark mode</p>
            <Toggler
              onChange={toggleTheme}
              checked={mode === "dark"}
              style={{ cursor: "pointer" }}
            />
          </S.ActionsContainer>
        </S.MenuContainer>
      )}
    </S.Container>
  );
};
