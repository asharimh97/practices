import '../styles/globals.css'
import type { AppProps } from 'next/app'
// @ts-ignore
import { defaultTheme } from "sore-ui";
import { ThemeProvider, Preflight } from "@xstyled/styled-components"
import { SWRConfig } from 'swr';
import fetcher from '@/config/fetcher';

interface PageProps extends AppProps {
  fallback?: any;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <ThemeProvider theme={defaultTheme}>
        <Preflight />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}

export default MyApp
