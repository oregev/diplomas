/* eslint-disable @typescript-eslint/ban-ts-comment */
import he from "date-fns/locale/he";
import { format } from "date-fns";

export const getPeriod = (start: string, end?: string): string => `
${format(
  new Date(start),
  "MMM yyyy",
  // @ts-ignore
  { locale: he }
)}
${
  end
    ? -format(
        new Date(end),
        "MMM yyyy",
        // @ts-ignore
        { locale: he }
      )
    : ""
} 
`;
