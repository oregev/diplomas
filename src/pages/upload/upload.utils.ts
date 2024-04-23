import { IStudent } from "AppContext";
import readXlsxFile from "read-excel-file";
import { validateEmailRegex } from "./upload.config";

export const getStudents = async (input: File | Blob | ArrayBuffer): Promise<IStudent[]> => {
  const rows = await readXlsxFile(input);
  const data = rows.map((row) => ({
    id: crypto.randomUUID(),
    last: row[0],
    first: row[1],
    studentId: row[2],
    grade: row[3],
    email: row[4],
    gender: row[5],
    approved: false,
  }));

  return data.slice(1) as IStudent[];
};

export const getIsValidEmail = (value: string) => validateEmailRegex.test(value);
