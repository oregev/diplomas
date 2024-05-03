import { ChangeEvent, DragEvent, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "router";
import { AppContext } from "AppContext";
import { createTemplate } from "api/template";
import { useCourses } from "api/useCourses";
import { useTemplates } from "api/useTemplates";
import { DropZone } from "features/dropZone";
import { HtmlDiploma } from "features/htmlDiploma";
import { Label } from "components/label";
import { Link } from "components/link";
import { State, initialState, mockStudent } from "./editor.config";
import { Form } from "./form";
import { FormFooter } from "./formFooter";
import { ConfirmModal } from "./confirmModal";
import * as S from "./editor.style";

export const Editor = (): JSX.Element => {
  const { courses } = useCourses();
  const navigate = useNavigate();
  const { t } = useTranslation("editor");
  const { getTemplate, updateTemplate } = useTemplates();
  const { courseId: cid, templateId: tid } = useParams();
  const { setSelectedTemplate } = useContext(AppContext);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [courseId, setCourseId] = useState<string | null>(cid ?? null);
  const [content, setContent] = useState<State>(initialState);

  const template = getTemplate(cid!, tid!);

  const getIsDisabled = (): boolean => {
    if (!template) {
      return (
        !courseId ||
        !content.courseName ||
        !content.courseDuration ||
        !content.start ||
        !content.end ||
        !content.period ||
        !content.lecturer
      );
    }
    return (
      !courseId &&
      !content.courseName &&
      !content.courseDuration &&
      !content.start &&
      !content.end &&
      !content.period &&
      !content.lecturer
    );
  };

  const resetContent = (): void => {
    setCourseId(null);
    setContent(initialState);
    navigate(`/${AppRoutes.EDITOR}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "start") {
      const period = `${event.target.value} - ${content.end}`;
      setContent((prev) => ({ ...prev, period, [event.target.name]: event.target.value }));
      return;
    }
    if (event.target.name === "end") {
      const period = `${content.start} - ${event.target.value}`;
      setContent((prev) => ({ ...prev, period, [event.target.name]: event.target.value }));
      return;
    }
    if (event.target.name === "use") {
      setContent((prev) => ({ ...prev, use: !prev.use }));
      return;
    }
    setContent((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleGenerate = (): void => {
    setIsConfirmOpen(false);

    if (courseId && !template) {
      const randomId = crypto.randomUUID();
      createTemplate(courseId, { id: randomId, ...content });
      setCourseId("");
      resetContent();

      if (content.use) {
        setSelectedTemplate({ course: courseId, id: randomId });
      }
      return;
    }
  };

  const handleUpdate = (): void => {
    setIsConfirmOpen(false);
    if (courseId && template?.id) {
      updateTemplate(courseId, template?.id, content);
    }
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.dataTransfer.files[0]);
      reader.onload = (event) => {
        const base64String = event.target?.result;
        setContent({ ...content, signature: base64String?.toString() ?? "" });
      };
    }
  };

  return (
    <S.Container>
      <S.LeftSection>
        <HtmlDiploma
          student={mockStudent}
          metaData={{
            courseName: content.courseName ?? template?.courseName ?? "",
            courseDuration: content.courseDuration ?? template?.courseDuration ?? "",
            start: content.start ?? template?.start ?? new Date().toString(),
            end: content.end ?? template?.end ?? new Date().toString(),
            period: content.period ?? template?.period ?? "",
            lecturer: content.lecturer ?? template?.lecturer ?? "",
            signature: content.signature ?? template?.signature ?? "",
          }}
        />
      </S.LeftSection>
      <S.RightSection>
        {courses?.length === 0 ? (
          <S.NoDataItemContainer>
            <S.NoDataItem>
              <p>{t("errors.courses.title")}</p>
            </S.NoDataItem>
            <Link text={t("errors.courses.content")} to={`/${AppRoutes.HOME}`} />
          </S.NoDataItemContainer>
        ) : (
          <>
            <Form
              content={content}
              template={template}
              courses={courses}
              courseId={courseId}
              onChange={handleChange}
              onCourseChange={setCourseId}
            />
            <S.UploadContainer>
              {/** //! move to form */}
              <Label htmlFor="signature" content={t("form.signature")} />
              <S.DropZoneContainer>
                <DropZone onDrop={handleDrop} width={200} height={30} />
              </S.DropZoneContainer>
            </S.UploadContainer>
            <FormFooter
              disabled={getIsDisabled()}
              isNew={!template}
              onClear={resetContent}
              onGenerate={() => setIsConfirmOpen(true)}
            />
          </>
        )}
      </S.RightSection>
      <ConfirmModal
        isOpen={isConfirmOpen}
        content={content}
        isNew={!template}
        courseName={courses?.find((course) => course.id === courseId)?.name ?? ""}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={!template ? handleGenerate : handleUpdate}
      />
    </S.Container>
  );
};
