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

    // 카카오
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
              
            })
        })
    }

    if (authCode) {
      callGetToken();
      // 여기에 담아오는 값을 로컬스토리지에 PK값을 적재하여 해당 값으로 판단한다.
    }

  }, [])
  // 정인님 이거 잠시 지우지 말아주세요 !!! 
  // 정인님 이거 잠시 지우지 말아주세요 !!!
  // 정인님 이거 잠시 지우지 말아주세요 !!!

  
  // 네이버 로그인 문제점이 버튼이랑 동일한 위치에서만 동작하는 것 같다.
  // 해당 부분 네이버 로그인 수정이 필요할 듯 하다.
  // API 호출 부분 하나로 몰아서 호출해야할 듯 하다.



  return (
    <>
      <MainPage />
      {isLogin && <ModalContanier />}
    </>
  );
};

export default Main;
