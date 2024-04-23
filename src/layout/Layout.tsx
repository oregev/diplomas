import { StylesProvider } from "./stylesProvider";
import { Header } from "./Header";
import { ActionBar } from "./ActionBar";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const Layout = (): JSX.Element => (
  <StylesProvider>
    <Header />
    <ActionBar />
    <Body />
    <Footer />
  </StylesProvider>
);
