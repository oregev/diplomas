import { ErrorIcon } from "assets/icons";

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps): JSX.Element => (
  <div style={{ marginTop: 3, display: "flex", flexDirection: "row", alignItems: "center" }}>
    <ErrorIcon width={12} height={12} stroke="red" />
    <div style={{ marginInlineStart: 5 }}>
      <p style={{ fontSize: 12, color: "red" }}>{message}</p>
    </div>
  </div>
);
