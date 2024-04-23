import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signatureContainer: {
    marginTop: 30,
    minWidth: 100,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signature: {
    minWidth: 100,
    marginBottom: 40,
    borderTop: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    marginBottom: 16,
    fontWeight: 700,
  },
});
