import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  ThemeProvider,
  defaultTheme,
  Preflight
} from "@xstyled/styled-components";
import GlobalStyles from "./styles/globalStyles";
import Routes from "./routes";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Preflight />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
