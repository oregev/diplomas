import { format } from "date-fns";
import { View, Text } from "@react-pdf/renderer";
import { he } from "date-fns/locale/he";
import { IStudent } from "AppContext";
import { DiplomaMetaData } from "types/common.types";
import text from "i18n/body.json";
import { styles } from "./body.style";

interface BodyProps {
  student: IStudent;
  metaData: DiplomaMetaData;
}

export const Body = ({ metaData, student }: BodyProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.title}>{text.title[student.gender]}</Text>
    <Text style={styles.courseName}>{metaData.courseName}</Text>
    <Text style={styles.duration}>
      {text.duration.pre} {metaData.courseDuration} {text.duration.post}
    </Text>
    <Text style={styles.text}>
      {text.start}: {format(new Date(metaData.start ?? ""), "dd.MM.yyyy")}
    </Text>
    <Text style={styles.text}>
      {text.end}: {format(new Date(metaData.end ?? ""), "dd.MM.yyyy")}
    </Text>
    <View style={styles.period}>
      <Text style={styles.text}>
        {format(new Date(metaData.end ?? ""), "MMMM, yyyy", { locale: he })}
      </Text>
      <Text>-</Text>
      <Text style={styles.text}>
        {format(new Date(metaData.start ?? ""), "MMMM, yyyy", { locale: he })}
      </Text>
    </View>
    {student.grade ? (
      <View style={styles.grade}>
        <Text style={styles.boldText}>{text.closer[student.gender]}</Text>
        <Text style={styles.underlinedText}>{student.grade}</Text>
      </View>
    ) : (
      <View style={styles.spacer} />
    )}
  </View>
);
