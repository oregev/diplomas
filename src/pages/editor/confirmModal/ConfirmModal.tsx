import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { AppRoutes } from "router";
import { ErrorIcon, ConfirmIcon } from "assets/icons";
import { Link } from "components/link";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { State } from "../editor.config";
import * as S from "./confirmModal.style";

interface ConfirmModalProps {
  isOpen: boolean;
  content: State;
  isNew: boolean;
  courseName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmModal = ({
  isOpen,
  content,
  isNew,
  courseName,
  onCancel,
  onConfirm,
}: ConfirmModalProps): JSX.Element => (
  <Modal isOpen={isOpen} onClose={() => null}>
    <S.Title>Create this template?</S.Title>
    <S.BodyContainer>
      <S.Field>
        Template name <S.Value>{content.courseName}</S.Value>
      </S.Field>
      <S.Field>
        Duration <S.Value>{content.courseDuration}</S.Value>
      </S.Field>
      <S.Field>
        Starts at{" "}
        {content?.start && (
          <S.Value>{format(new Date(content?.start ?? ""), "MMM, yyyy", { locale: he })}</S.Value>
        )}
      </S.Field>
      <S.Field>
        Ends at{" "}
        {content?.end && (
          <S.Value>{format(new Date(content?.end ?? ""), "MMM, yyyy", { locale: he })}</S.Value>
        )}
      </S.Field>
      <S.Field>
        Lecturer <S.Value>{content.lecturer}</S.Value>
      </S.Field>
      <S.Field>
        Course <S.Value>{courseName}</S.Value>
      </S.Field>
      <S.Template>
        <S.TemplateField>Use template</S.TemplateField>
        {content.use ? (
          <ConfirmIcon width={16} height={16} stroke="green" />
        ) : (
          <ErrorIcon width={17} height={17} stroke="red" />
        )}
      </S.Template>
      {content.signature && (
        <S.Signature>
          <S.Field>Signature</S.Field>
          <S.Image>
            <img src={content.signature ?? ""} alt="signature" width={120} height="auto" />
          </S.Image>
        </S.Signature>
      )}
    </S.BodyContainer>
    <S.FooterContainer>
      <Button text="Cancel" onClick={onCancel} variant="base" width="100px" height="36px" />
      <Link
        to={content.use ? `/${AppRoutes.UPLOAD}` : "#"}
        text={isNew ? "Generate" : "update"}
        onClick={onConfirm}
        variant="secondary"
        width="100px"
        height="36px"
      />
    </S.FooterContainer>
  </Modal>
);
