import { pdf } from "@react-pdf/renderer";
import { IStudent } from "AppContext";
import { format } from "date-fns";
import { he } from "date-fns/locale/he";
import { DiplomaMetaData } from "types/common.types";
import { BASE, BODY, SUBJECT_PREFIX } from "./share.config";

export const handleDownloadPdf = async (
  diplomas: JSX.Element[],
  students: IStudent[]
): Promise<void> => {
  try {
    diplomas.forEach(async (diploma, index) => {
      const blob = await pdf(diploma).toBlob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");

      anchor.href = url;
      anchor.download = `${students[index].last}_${students[index].first}_${index + 1}.pdf`;
      anchor.click();
      anchor.remove();
    });
  } catch (error) {
    console.error(error);
  }
};

const getHref = (student: IStudent, template: DiplomaMetaData) => {
  const email = `${BASE}${student.email}`;
  const date = format(new Date(template?.start ?? ""), "MMM, yyyy", { locale: he });
  const subject = `${SUBJECT_PREFIX}${template?.courseName} ${date} - ${template?.lecturer}`;
  const params = `${subject}&${BODY}`;
  return `${email}?${params}`;
};

export const handleSendEmail = (students: IStudent[], template: DiplomaMetaData): void => {
  students.forEach((student) => {
    const href = getHref(student, template);
    window.open(href);
  });
};
