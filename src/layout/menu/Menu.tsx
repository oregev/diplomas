import { useContext, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "i18n/languages";
import { useTheme } from "styled-components";
import { AppRoutes } from "router";
import { useClickOutside } from "hooks";
import { AppContext } from "AppContext";
import { MenuIcon } from "assets/icons";
import { Toggler } from "components/toggler";
import * as S from "./menu.style";

export const Menu = (): JSX.Element => {
  const theme = useTheme();
  const { t, i18n } = useTranslation("menu");
  const ref = useRef<HTMLDivElement | null>(null);
  const { theme: mode, toggleTheme } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useClickOutside(ref, () => setIsOpen(false));

  useLayoutEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <S.Container ref={ref}>
      <S.IconContainer onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon width={25} height={25} stroke={theme.icon} />
      </S.IconContainer>
      {isOpen && (
        <S.MenuContainer>
          <S.StyledLink to={`/${AppRoutes.HOME}`} onClick={() => setIsOpen(false)}>
            {t(AppRoutes.HOME)}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.EDITOR}`} onClick={() => setIsOpen(false)}>
            {t(AppRoutes.EDITOR)}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.UPLOAD}`} onClick={() => setIsOpen(false)}>
            {t(AppRoutes.UPLOAD)}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.PREVIEW}`} onClick={() => setIsOpen(false)}>
            {t(AppRoutes.PREVIEW)}
          </S.StyledLink>
          <S.StyledLink to={`/${AppRoutes.SHARE}`} onClick={() => setIsOpen(false)}>
            {t(AppRoutes.SHARE)}
          </S.StyledLink>
          <S.ActionsContainer>
            <S.Mode>{t("darkMode")}</S.Mode>
            <Toggler onChange={toggleTheme} checked={mode === "dark"} />
          </S.ActionsContainer>
          <S.ActionsContainer>
            <S.Mode>{t("language")}</S.Mode>
            <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
              {Object.keys(languages).map((lng) => (
                <option key={lng} value={lng} selected={i18n.language === lng}>
                  {lng}
                </option>
              ))}
            </select>
          </S.ActionsContainer>
        </S.MenuContainer>
      )}
    </S.Container>
  );
};
