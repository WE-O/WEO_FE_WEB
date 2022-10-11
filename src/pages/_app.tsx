import "../../styles/globals.css";
import theme from "../style/theme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "../components/Common";
import wrapper from "../store";
import Script from "next/script";

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
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY}&autoload=false&libraries=services`}
          strategy="beforeInteractive"
        />

        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
