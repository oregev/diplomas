import { pdf } from "@react-pdf/renderer";
import { IStudent } from "AppContext";
import { BASE } from "./share.config";

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

const getHref = (student: IStudent, subject: string, body: string) => {
  const email = BASE + student.email;
  const params = subject + "&" + body;
  console.log(email + "?" + params);
  return email + "?" + params;
};

export const handleSendEmail = ({
  students,
  email,
}: {
  students: IStudent[];
  email: {
    subject: string;
    body: string;
  };
}): void => {
  students.forEach((student) => {
    const href = getHref(student, email.subject, email.body);
    window.open(href);
  });
};
