import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
// import { languages } from "i18n/languages";
import { /* AlertIcon, */ FolderIcon } from "assets/icons";
import * as S from "./actionBar.styles";

interface ActionsProps {
  onFolder: () => void;
  onTest: () => void;
}

export const Actions = ({ onFolder /* onTest */ }: ActionsProps): JSX.Element => {
  const { t, i18n } = useTranslation("actions", { keyPrefix: "folder" });

  useLayoutEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  return (
    <S.Actions>
      <S.IconContainer onClick={onFolder} title={t("trigger")}>
        <FolderIcon width={20} height={25} stroke="#fff" />
      </S.IconContainer>
      {/* //! Construction zone ! */}
      {/* <S.IconContainer onClick={onTest} title="test">
        <AlertIcon width={20} height={25} stroke="#fff" />
      </S.IconContainer> */}
    </S.Actions>
  );
};
