interface Theme {
  body: string;
  text: string;
  invertedText: string;
  icon: string;
  label: string;
  background: string;
  invertedBackground: string;
  boxShadow: string;
  border: string;
  modalOverlay: string;
  filledButton: string;
  outlinedButton: string;
}

export const lightTheme: Theme = {
  body: "#fff",
  text: "#333",
  invertedText: "rgba(255, 255, 255, 0.8)",
  label: "rgba(100, 100, 100, 1)",
  icon: "#333",
  background: "#fff",
  invertedBackground: "rgba(66, 66, 66, 0.7)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  border: "rgba(0, 0, 0, 0.2)",
  modalOverlay: "rgba(255, 255, 255, 0.4)",
  filledButton: "rgba(255, 255, 255, 0.9)",
  outlinedButton: "rgba(33, 33, 33, 0.9)",
};

export const darkTheme: Theme = {
  body: "#333",
  text: "rgba(255, 255, 255, 0.8)",
  invertedText: "rgba(33, 33, 33, 0.8)",
  label: "rgba(200, 200, 200, 1)",
  icon: "rgba(255, 255, 255, 0.8)",
  background: "rgba(66, 66, 66, 0.7)",
  invertedBackground: "rgba(255, 255, 255, 0.2)",
  boxShadow: "0 0 4px rgba(0, 0, 0, 1)",
  border: "rgba(255, 255, 255, 0.2)",
  modalOverlay: "rgba(0, 0, 0, 0.35)",
  filledButton: "rgba(255, 255, 255, 0.9)",
  outlinedButton: "rgba(255, 255, 255, 0.9)",
};
