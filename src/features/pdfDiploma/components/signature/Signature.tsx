import { View, Text, Image } from "@react-pdf/renderer";
import signature2 from "assets/signature2.png";
import text from "i18n/signature.json";
import { styles } from "./signature.style";

interface SignatureProps {
  signature: string | null;
  lecturer: string | null;
}

export const Signature = ({ signature, lecturer }: SignatureProps): JSX.Element => (
  <View style={styles.container}>
    <View style={styles.signatureContainer}>
      <View style={styles.wrapper}>
        {signature && <Image src={signature} style={{ width: 100, height: 50 }} />}
      </View>
      <View style={styles.signature}>
        <Text style={styles.text}>{lecturer}</Text>
      </View>
    </View>
    <View style={styles.signatureContainer}>
      <View style={styles.wrapper}>
        <Image source={signature2} style={{ width: 100, height: 50 }} />
      </View>
      <View style={styles.signature}>
        <Text style={styles.text}>{text.right}</Text>
      </View>
    </View>
  </View>
);
