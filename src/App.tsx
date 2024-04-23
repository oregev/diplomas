import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { AppContextProvider } from "./AppContext";
import { ErrorFallback } from "./error";
import { router } from "./router";

export const App = (): JSX.Element => (
  <ErrorBoundary fallbackRender={ErrorFallback}>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </ErrorBoundary>
);
