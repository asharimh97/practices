import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import {
  defaultTheme,
  Preflight,
  ThemeProvider
} from "@xstyled/styled-components";
import theme from "./styles/theme";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/globalStyle";

const appTheme = {
  ...defaultTheme,
  theme
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      {/* App styling */}
      <Preflight />
      <GlobalStyles />

      {/* App routing */}
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
