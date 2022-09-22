import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/Common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {
        // Component 컴포넌트 위에 MainLayOut이 먼저 렌더되기 때문에 유효하지 않은 URL이여도
        // 헤더가 그대로 나오는 이슈가 있음. 일단 이렇게 임시방편으로 막아놨어용
        Component.name === "Custom404" ?
          <Component {...pageProps} />
          :

          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      }
    </>

  );
}

export default MyApp;
