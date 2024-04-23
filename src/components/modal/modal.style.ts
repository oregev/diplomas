import { CSSProperties } from "react";

interface Styles {
  content?: CSSProperties;
  overlay?: CSSProperties;
}

export const styles: Styles = {
  overlay: {},
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
  },
};
