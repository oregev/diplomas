import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { AppRoutes } from "router";
import { ErrorIcon, ConfirmIcon } from "assets/icons";
import { Link } from "components/link";
import { Button } from "components/button";
import { Modal } from "components/modal";
import { State } from "../editor.config";
import * as S from "./confirmModal.style";
import { useTranslation } from "react-i18next";

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
}: ConfirmModalProps): JSX.Element => {
  const { t } = useTranslation("editor", { keyPrefix: "confirmModal" });

  return (
    <Modal isOpen={isOpen} onClose={() => null}>
      <S.Title>{t("title")}</S.Title>
      <S.BodyContainer>
        <S.Field>
          {t("name")} <S.Value>{content.courseName}</S.Value>
        </S.Field>
        <S.Field>
          {t("duration")} <S.Value>{content.courseDuration}</S.Value>
        </S.Field>
        <S.Field>
          {t("start")}
          {content?.start && (
            <S.Value>
              {format(new Date(content?.start ?? ""), "MMMM, yyyy", { locale: he })}
            </S.Value>
          )}
        </S.Field>
        <S.Field>
          {t("end")}
          {content?.end && (
            <S.Value>{format(new Date(content?.end ?? ""), "MMMM, yyyy", { locale: he })}</S.Value>
          )}
        </S.Field>
        <S.Field>
          {t("lecturer")} <S.Value>{content.lecturer}</S.Value>
        </S.Field>
        <S.Field>
          {t("course")} <S.Value>{courseName}</S.Value>
        </S.Field>
        <S.Template>
          <S.TemplateField>{t("use")}</S.TemplateField>
          {content.use ? (
            <ConfirmIcon width={16} height={16} stroke="green" />
          ) : (
            <ErrorIcon width={17} height={17} stroke="red" />
          )}
        </S.Template>
        {content.signature && (
          <S.Signature>
            <S.Field>{t("signature")}</S.Field>
            <S.Image>
              <img src={content.signature ?? ""} alt="signature" width={120} height="auto" />
            </S.Image>
          </S.Signature>
        )}
      </S.BodyContainer>
      <S.FooterContainer>
        <Button
          text={t("buttons.cancel")}
          onClick={onCancel}
          variant="base"
          width="100px"
          height="36px"
        />
        <Link
          to={content.use ? `/${AppRoutes.UPLOAD}` : "#"}
          text={isNew ? t("buttons.generate") : t("buttons.update")}
          onClick={onConfirm}
          variant="secondary"
          width="100px"
          height="36px"
        />
      </S.FooterContainer>
    </Modal>
  );
};
