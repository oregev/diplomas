import { DiplomaMetaData } from "types/common.types";
import { useCourses } from "./useCourses";

export const useTemplates = () => {
  const { courses, updateCourse } = useCourses();

  const getTemplate = (
    courseId: string | null,
    templateId: string | null
  ): DiplomaMetaData | undefined => {
    if (courseId && templateId) {
      const course = courses.find((course) => course.id === courseId);
      const template = course?.templates.find((course) => course.id === templateId);
      return template;
    }
  };

  const createTemplate = (courseId: string, payload: DiplomaMetaData): void => {
    const course = courses.find((course) => course.id === courseId);
    if (course) {
      updateCourse(courseId, { templates: [...course.templates, { ...payload }] });
    }
  };

  const updateTemplate = (
    courseId: string,
    templateId: string,
    payload: Partial<Omit<DiplomaMetaData, "id">>
  ): void => {
    const course = courses.find((course) => course.id === courseId);

    if (course) {
      const updatedTemplates = course.templates.map((template) =>
        template.id === templateId
          ? {
              ...template,
              ...payload,
            }
          : template
      );

      updateCourse(courseId, { templates: updatedTemplates });
    }
  };

  const deleteTemplate = (courseId: string, templateId: string): void => {
    const course = courses.find((course) => course.id === courseId);

    if (templateId && course) {
      const filteredTemplates = course.templates.filter((template) => template.id !== templateId);
      updateCourse(courseId, { templates: filteredTemplates });
    }
  };

  return {
    getTemplate,
    createTemplate,
    updateTemplate,
    deleteTemplate,
  };
};
