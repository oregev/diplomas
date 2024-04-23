import { PDFViewer } from "@react-pdf/renderer";

interface DiplomaViewerProps {
  children: JSX.Element;
}

export const DiplomaViewer = ({ children }: DiplomaViewerProps): JSX.Element => (
  <PDFViewer
    width={500}
    height={685}
    showToolbar={false}
    style={{
      padding: 0,
      border: "none",
      backgroundColor: "none",
    }}
  >
    {children}
  </PDFViewer>
);
