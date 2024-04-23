import { View, Text, Image } from "@react-pdf/renderer";
import bottomBanner from "assets/bottomBanner.png";
import text from "i18n/footer.json";
import { styles } from "./footer.style";

export const Footer = (): JSX.Element => (
  <>
    <View style={styles.closer}>
      <Text style={styles.text}>{text.text}</Text>
    </View>
    <View style={styles.bottomBanner}>
      <Image src={bottomBanner} style={{ width: 650, height: 30 }} />
    </View>
  </>
);
