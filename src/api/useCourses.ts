import useLocalStorage from "use-local-storage";
import { DiplomaMetaData } from "types/common.types";

export interface ICourse {
  id: string;
  name: string;
  templates: DiplomaMetaData[];
}

export const useCourses = () => {
  const [courses, setCourses] = useLocalStorage<ICourse[]>("courses", []);

  const getCourse = (id: string): ICourse | undefined => {
    if (courses.length && id) {
      const course = courses.find((course) => course.id === id);
      return course;
    }
  };

  const createCourse = (payload: Omit<ICourse, "id">): void => {
    const randomId = crypto.randomUUID();
    const updatedCourses = [...courses, { id: randomId, ...payload }];
    setCourses(updatedCourses);
  };

  const updateCourse = (id: string, payload: Partial<Omit<ICourse, "id">>): void => {
    if (id && payload) {
      const updatedCourses = courses.map((course) =>
        course.id === id
          ? {
              ...course,
              ...payload,
            }
          : course
      );
      setCourses(updatedCourses);
    }
  };

  const deleteCourse = (id: string): void => {
    if (id) {
      const filteredCourses = courses.filter((course) => course.id !== id);
      setCourses(filteredCourses);
    }
  };

  return {
    courses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};
