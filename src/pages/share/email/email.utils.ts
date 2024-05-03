import { IStudent } from "AppContext";
import { BASE } from "./email.config";

const getHref = (student: IStudent, subject: string, body: string) => {
  const email = BASE + student.email;
  const params = subject + "&" + body;
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
