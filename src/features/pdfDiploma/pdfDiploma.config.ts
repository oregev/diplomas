import { Font } from "@react-pdf/renderer";
import regularFont from "../../fonts/Rubik-VariableFont_wght.ttf";
import boldFont from "../../fonts/Rubik-SemiBold.ttf";

Font.register({
  family: "Rubik-regular",
  format: "",
  src: regularFont,
});

Font.register({
  family: "Rubik-bold",
  format: "",
  src: boldFont,
});
