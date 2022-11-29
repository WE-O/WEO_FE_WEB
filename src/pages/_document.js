import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      debugger
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props}></App>),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      debugger
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="kr">
        <Head>
          <script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js" />
          <script type="text/javascript" src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLOUD_CLIENT_ID}`}></script>
        </Head>
      
        <body>
          {/* IE에서도 동작할 수 있도록 폴리필 추가 */}
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019" />
          <Main />
          <NextScript/>
        </body>
      </Html>
    );
  }
}
