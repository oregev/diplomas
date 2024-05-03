import { StylesProvider } from "./stylesProvider";
import { Header } from "./header";
import { ActionBar } from "./actionBar";
import { Body } from "./body";
import { Footer } from "./footer";

export const Layout = (): JSX.Element => (
  <StylesProvider>
    <Header />
    <ActionBar />
    <Body />
    <Footer />
  </StylesProvider>
);
