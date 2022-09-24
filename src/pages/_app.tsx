import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../style/theme";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "../components/Common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
