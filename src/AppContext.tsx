import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface IStudent {
  id: string;
  last: string;
  first: string;
  studentId: string;
  grade: string;
  email: string;
  gender: "F" | "M";
  approved: boolean;
}

interface AppContextObj {
  students: IStudent[];
  theme: "light" | "dark";
  verified: boolean;
  selectedTemplate: {
    course: string | null;
    id: string | null;
  };
  toggleTheme: () => void;
  setStudents: Dispatch<SetStateAction<IStudent[]>>;
  setVerified: Dispatch<SetStateAction<boolean>>;
  setSelectedTemplate: Dispatch<
    SetStateAction<{
      course: string | null;
      id: string | null;
    }>
  >;
}

export const AppContext = createContext({} as AppContextObj);

export const AppContextProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [students, setStudents] = useState<IStudent[]>([]);
  const [verified, setVerified] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    id: string | null;
    course: string | null;
  }>({
    id: null,
    course: null,
  });

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value: AppContextObj = {
    verified,
    students,
    theme,
    selectedTemplate,
    setSelectedTemplate,
    setStudents,
    setVerified,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
