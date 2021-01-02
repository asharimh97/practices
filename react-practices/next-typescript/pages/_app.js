import { wrapper } from "stores";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

import "../src/styles/normalize.css";
import "../src/styles/style.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
