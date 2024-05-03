import { Button } from "components/button";
import { Modal } from "components/modal";
import * as S from "./confirmModal.style";
import { useTranslation } from "react-i18next";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen,
  title,
  content,
  onCancel,
  onConfirm,
}: ConfirmModalProps): JSX.Element => {
  const { t } = useTranslation("common", { keyPrefix: "buttons" });

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      <S.BodyContainer>
        <S.Content>{content}</S.Content>
      </S.BodyContainer>
      <S.FooterContainer>
        <Button text={t("cancel")} onClick={onCancel} variant="base" width="100px" height="36px" />
        <Button
          text={t("confirm")}
          onClick={onConfirm}
          variant="danger"
          width="100px"
          height="36px"
        />
      </S.FooterContainer>
    </Modal>
  );
};
