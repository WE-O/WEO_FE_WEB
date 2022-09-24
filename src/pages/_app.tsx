import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import theme from "../style/theme";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "../components/Common";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "_error") return <Component {...pageProps} />;

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
