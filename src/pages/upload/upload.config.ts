import { IStudent } from "AppContext";

export const validateEmailRegex = /^\S+@\S+\.\S+$/;

export const initialState: Omit<IStudent, "id"> = {
  first: "",
  last: "",
  studentId: "",
  grade: "",
  email: "",
  gender: "F",
  approved: false,
};
