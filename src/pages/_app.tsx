import "../../styles/globals.css";
import theme from "../style/theme";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { MainLayout } from "../components/Common";
import wrapper from "../store";
import Script from "next/script";
import { Footer } from "../components/MainPage/modules";
import { useEffect, useState } from "react";


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toast } from "../store/modules/ToastSlice";

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref,
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const toastInfo = useAppSelector((state) => state.toast);
  // const [open, setOpen] = useState(toastInfo.toastOpen);
  

  // useEffect(() => {
  //   setOpen(toastInfo.toastOpen);
  // },[open])

  // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   dispatch(toast({
  //     toastOpen: false,
  //   }));
  // };

  if (router.pathname === "_error") return <Component {...pageProps} />;

  // http -> https 리다이렉션
  // nodeJS로 리다이렉션을 구현하려하였지만 실패,,
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      if (window.location.href.substring(0, 5).toLocaleLowerCase() === "http:") {
        window.location.href = window.location.href.replace(':', "s:");
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>식식물물, 새로운 식물 집사 플랫폼</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY}&autoload=false&libraries=services`}
          strategy="beforeInteractive"
        />

        <Component {...pageProps} />
      </MainLayout>
      <Footer />


      {/* <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toastInfo.type} sx={{ width: '100%' }}>
          {
            toastInfo.toastText
          }
        </Alert>
      </Snackbar> */}

    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

