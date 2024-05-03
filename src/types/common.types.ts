export interface DiplomaMetaData {
  id: string;
  courseName: string | null;
  courseDuration: string | null;
  start: string | null;
  end: string | null;
  period: string | null;
  lecturer: string | null;
  signature: string | null;
}

export type TextDirection = "rtl" | "ltr";
