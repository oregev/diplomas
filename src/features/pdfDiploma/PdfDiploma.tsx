import { Page, View, Document, Image } from "@react-pdf/renderer";
import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";
import { Intro } from "./components/intro";
import { Body } from "./components/body";
import { Signature } from "./components/signature";
import { Footer } from "./components/footer";
import { styles } from "./pdfDiploma.style";
import topBanner from "assets/topBanner.png";
import "./pdfDiploma.config";

interface PdfDiplomaProps {
  student: IStudent;
  metaData: DiplomaMetaData;
}

export const PdfDiploma = ({ student, metaData }: PdfDiplomaProps): JSX.Element => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.topBanner}>
        <Image source={topBanner} style={{ width: 500, height: 80 }} />
      </View>
      <Intro name={`${student.first} ${student.last}`} id={student.studentId} />
      <Body metaData={metaData} student={student} />
      <Signature lecturer={metaData.lecturer} signature={metaData.signature} />
      <Footer />
    </Page>
  </Document>
);
