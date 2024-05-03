import { Button } from "components/button";
import { Modal } from "components/modal";
import * as S from "./deleteModal.style";
import { useTranslation } from "react-i18next";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({ isOpen, onCancel, onDelete }: DeleteModalProps): JSX.Element => {
  const { t } = useTranslation("common", { keyPrefix: "deleteModal" });

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <S.Container>
        <S.TitleContainer>
          <S.Content>{t("title")}</S.Content>
        </S.TitleContainer>
        <S.ContentContainer>
          <S.Content>{t("content")}</S.Content>
        </S.ContentContainer>
        <S.FooterContainer style={{ display: "flex" }}>
          <Button
            text={t("buttons.cancel")}
            variant="base"
            width="100px"
            height="30px"
            onClick={onCancel}
          />
          <Button
            text={t("buttons.delete")}
            variant="danger"
            width="100px"
            height="30px"
            onClick={onDelete}
          />
        </S.FooterContainer>
      </S.Container>
    </Modal>
  );
};
