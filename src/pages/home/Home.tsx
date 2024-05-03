import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "AppContext";
import { useCourses } from "api/useCourses";
import { useTemplates } from "api/useTemplates";
import { AddIcon, FolderIcon } from "assets/icons";
import { CollapseCard } from "./collapseCard";
import * as S from "./home.style";

export const Home = (): JSX.Element => {
  const { t } = useTranslation("home", { keyPrefix: "errors" });
  const { courses, updateCourse, deleteCourse } = useCourses();
  const { deleteTemplate } = useTemplates();
  const { setSelectedTemplate } = useContext(AppContext);

  const handleDelete = (courseId: string, templateId: string) => {
    if (courseId && templateId) {
      deleteTemplate(courseId, templateId);
    }
  };

  const hasNoTemplates = courses.every((course) => course.templates.length === 0);

  return (
    <S.Container>
      {courses.length > 0 ? (
        <S.CoursesContainer>
          {courses?.map((course) => (
            <CollapseCard
              key={course.id}
              course={course}
              onEdit={(id) => setSelectedTemplate({ id, course: course.id })}
              onRename={(name) => updateCourse(course.id, { name })}
              onDeleteTemplate={(id) => handleDelete(course.id, id)}
              onDeleteCourse={() => deleteCourse(course.id)}
            />
          ))}
        </S.CoursesContainer>
      ) : (
        <S.NoData>
          <S.NoDataTitle>{t("courses.title")}</S.NoDataTitle>
          <S.NoDataContent>{t("courses.content")}</S.NoDataContent>
          <S.IconContainer>
            <FolderIcon width={20} height={20} stroke="#fff" />
          </S.IconContainer>
        </S.NoData>
      )}
      {courses.length > 0 && hasNoTemplates && (
        <S.NoData>
          <S.NoDataTitle>{t("templates.title")}</S.NoDataTitle>
          <S.NoDataContent>{t("templates.content")}</S.NoDataContent>
          <S.IconContainer>
            <AddIcon width={20} height={20} stroke="#fff" />
          </S.IconContainer>
        </S.NoData>
      )}
    </S.Container>
  );
};
