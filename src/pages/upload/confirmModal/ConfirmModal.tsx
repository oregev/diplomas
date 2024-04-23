import { Button } from "components/button";
import { Modal } from "components/modal";
import * as S from "./confirmModal.style";

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
}: ConfirmModalProps): JSX.Element => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <S.Title>{title}</S.Title>
    <S.BodyContainer>
      <S.Content>{content}</S.Content>
    </S.BodyContainer>
    <S.FooterContainer>
      <Button text="Cancel" onClick={onCancel} variant="base" width="100px" height="40px" />
      <Button text="Confirm" onClick={onConfirm} variant="danger" width="100px" height="40px" />
    </S.FooterContainer>
  </Modal>
);
