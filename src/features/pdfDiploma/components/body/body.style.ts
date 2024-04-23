import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    textAlign: "center",
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 18,
    marginBottom: 14,
  },
  courseName: {
    marginBottom: 30,
    fontFamily: "Rubik-bold",
    fontSize: 14,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 18,
    marginBottom: 22,
  },
  text: {
    fontSize: 14,
  },
  period: {
    flexDirection: "row",
    gap: "10px",
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  grade: {
    marginBottom: 14,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    gap: 4,
  },
  boldText: {
    fontFamily: "Rubik-bold",
    fontSize: 14,
    fontWeight: "bold",
  },
  underlinedText: {
    fontFamily: "Rubik-bold",
    fontSize: 14,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  spacer: {
    marginBottom: 14,
    height: 20,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    gap: 4,
  },
});
