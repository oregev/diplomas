import { View, Text } from "@react-pdf/renderer";
import text from "i18n/intro.json";
import { styles } from "./intro.style";

interface IntroProps {
  name: string;
  id: string;
}

export const Intro = ({ name, id }: IntroProps): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.pre}>{text.pre}</Text>
    <Text style={styles.title}>{text.title}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.id}>{`${id} ${text.id}`}</Text>
  </View>
);
