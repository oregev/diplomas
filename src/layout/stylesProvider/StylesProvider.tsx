import { ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { AppContext } from "AppContext";
import { GlobalStyles, darkTheme, lightTheme } from "styles";

export const StylesProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
