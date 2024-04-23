import { he } from "date-fns/locale/he";
import { format } from "date-fns";

export const getPeriod = (start: string, end?: string): string => {
  if (start) {
    return `
      ${format(new Date(start), "MMM yyyy", { locale: he })}
      ${end ? -format(new Date(end), "MMM yyyy", { locale: he }) : ""} 
  `;
  }
  return "";
};
