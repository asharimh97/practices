import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "lib/store";
import { Preflight, ThemeProvider } from "@xstyled/styled-components";
import theme from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default wrapper.withRedux(MyApp);
