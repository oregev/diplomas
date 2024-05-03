import { pdf } from "@react-pdf/renderer";
import { IStudent } from "AppContext";

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
