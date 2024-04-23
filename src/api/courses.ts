import { DiplomaMetaData } from "types/common.types";
import database from "utils/localStorage.utils";

export interface ICourse {
  id: string;
  name: string;
  templates: DiplomaMetaData[];
}

export const getAllCourses = (): ICourse[] => {
  const courses = database.getFromLocalStorage("courses");
  return courses ? JSON.parse(courses) : [];
};

export const getCourse = (id: string): ICourse | undefined => {
  const courses = getAllCourses();

  if (courses.length && id) {
    const course = courses.find((course) => course.id === id);
    return course;
  }
};

export const createCourse = (payload: Omit<ICourse, "id">): void => {
  const randomId = crypto.randomUUID();
  const courses = getAllCourses();

  if (courses.length > 0) {
    const updatedCourses = [...courses, { id: randomId, ...payload }];
    database.addToLocalStorage("courses", JSON.stringify(updatedCourses));
    return;
  }
  database.addToLocalStorage("courses", JSON.stringify([{ id: randomId, ...payload }]));
};

export const updateCourse = (id: string, payload: Partial<Omit<ICourse, "id">>): void => {
  if (id && payload) {
    const courses = getAllCourses();
    const updatedCourses = courses.map((course) =>
      course.id === id
        ? {
            ...course,
            ...payload,
          }
        : course
    );
    database.addToLocalStorage("courses", JSON.stringify(updatedCourses));
  }
};

export const deleteCourse = (id: string): void => {
  const courses = getAllCourses();

  if (id) {
    const filteredCourses = courses.filter((course) => course.id !== id);
    database.addToLocalStorage("courses", JSON.stringify(filteredCourses));
  }
};
