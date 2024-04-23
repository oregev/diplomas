import { DiplomaMetaData } from "types/common.types";
import { getCourse, updateCourse } from "./courses";

export const getAllTemplates = (courseId: string): DiplomaMetaData[] | undefined => {
  const course = getCourse(courseId);
  return course?.templates;
};

export const getTemplate = (courseId: string, templateId: string): DiplomaMetaData | undefined => {
  const templates = getAllTemplates(courseId);

  if (templates?.length && templateId) {
    const template = templates.find((template) => template.id === templateId);
    return template;
  }
};

export const createTemplate = (courseId: string, payload: DiplomaMetaData): void => {
  const course = getCourse(courseId);

  if (course) {
    updateCourse(courseId, { templates: [...course.templates, { ...payload }] });
  }
};

export const updateTemplate = (
  courseId: string,
  templateId: string,
  payload: Partial<Omit<DiplomaMetaData, "id">>
): void => {
  const course = getCourse(courseId);

  if (course) {
    const updatedTemplates = course.templates.map((template) =>
      template.id === templateId
        ? {
            ...template,
            payload,
          }
        : template
    );

    updateCourse(courseId, { templates: updatedTemplates });
  }
};

export const deleteTemplate = (courseId: string, templateId: string): void => {
  const course = getCourse(courseId);

  if (templateId && course) {
    const filteredTemplates = course.templates.filter((template) => template.id !== templateId);
    updateCourse(courseId, { templates: filteredTemplates });
  }
};
