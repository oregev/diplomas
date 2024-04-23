import { Button } from "components/button";
import { Modal } from "components/modal";
import * as S from "./deleteModal.style";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({ isOpen, onCancel, onDelete }: DeleteModalProps): JSX.Element => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <S.Container>
      <S.TitleContainer>
        <S.Content>Are you sure?</S.Content>
      </S.TitleContainer>
      <S.ContentContainer>
        <S.Content>This action is permanent!</S.Content>
      </S.ContentContainer>
      <S.FooterContainer style={{ display: "flex" }}>
        <Button text="cancel" variant="base" width="100px" height="30px" onClick={onCancel} />
        <Button text="delete" variant="danger" width="100px" height="30px" onClick={onDelete} />
      </S.FooterContainer>
    </S.Container>
  </Modal>
);
