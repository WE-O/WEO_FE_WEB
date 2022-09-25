import MainPage from "../../components/MainPage";
import { useAppSelector } from "../../store/hooks";
import ModalContanier from "../../components/Common/Modal/ModalContainer";
import { REST_API_KEY, REDIRECT_URI } from "../../../storage";
import { useEffect } from "react";
import axios from "axios";

const Main = () => {
  const isLogin = useAppSelector((state) => state.login.openLogin);


  // 정인님 이거 잠시 지우지 말아주세요 !!! 
  // 정인님 이거 잠시 지우지 말아주세요 !!!
  // 정인님 이거 잠시 지우지 말아주세요 !!! 
  useEffect(() => {

    document.cookie = 'same-site-cookie=foo; SameSite=Lax';
    document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

    const authCode = window.location.href.split("code=")[1];
    const formUrlEncoded = (x: { [x: string]: string | number | boolean; }) =>
      Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
    const getTokenURL = "https://kauth.kakao.com/oauth/token"
    const headers = {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    }

    const callGetToken = async () => {
      await axios.post(getTokenURL,
        formUrlEncoded({
          grant_type: "authorization_code",
          client_id: REST_API_KEY(),
          redirect_uri: REDIRECT_URI(),
          code: authCode
        })
        , { headers }
      )
        .then(async (res) => {
          debugger
          const accessToken = res.data.access_token;
          const expires_in = res.data.expires_in;
          const callAPIURL = "http://101.101.217.55:8080/api/member/kakao/login";
          await axios.get(callAPIURL, {
            params: {
              accessToken: accessToken,
              expiresIn: expires_in
            },
            withCredentials: true
          })
            .then((res) => {
              debugger
            })
        })
    }

    if (authCode) {
      callGetToken();
    }
  }, [])
  // 정인님 이거 잠시 지우지 말아주세요 !!! 
  // 정인님 이거 잠시 지우지 말아주세요 !!!
  // 정인님 이거 잠시 지우지 말아주세요 !!! 



  return (
    <>
      <MainPage />
      {isLogin && <ModalContanier />}
    </>
  );
};

export default Main;
