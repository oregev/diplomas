import * as S from "./errorFallback.style";

interface ErrorFallbackProps {
  error: unknown;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element => (
  <S.Container role="alert">
    <p>Something went wrong:</p>
    <br />
    <pre style={{ color: "red" }}>{JSON.stringify(error)}</pre>
    <br />
    <button onClick={resetErrorBoundary}>reset</button>
  </S.Container>
);
