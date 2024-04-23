import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";

export type State = Omit<DiplomaMetaData, "id"> & { use: boolean };

export const initialState: State = {
  courseName: null,
  courseDuration: 0,
  start: null,
  end: null,
  period: null,
  lecturer: null,
  signature: null,
  use: false,
};

export const mockStudent: Omit<IStudent, "approved"> = {
  first: "Israel",
  last: "Israeli",
  id: "123456789",
  studentId: "123456789",
  grade: "85",
  email: "test@test.com",
  gender: "F",
};
