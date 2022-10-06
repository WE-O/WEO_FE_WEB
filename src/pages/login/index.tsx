import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Router from "next/router";


const Login = () => {

    //! API KEY & Callback URL 
    const REDIRECT_URI = process.env.NEXT_PUBLIC_CALLBACK_URL;
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const NAVER_Client_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const NAVER_Client_Secret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    let naverLogin: any;
    let naver: any;

    //! useEffect
    useEffect(() => {
        // 전역객체에서 네이버 SDK 가져오기
        naver = (window as any).naver;
        naverInit();

        const kakaoAuthToken = window.location.href.split("code=")[1];
        const naverAuthToken = window.location.href.split("#")[1];
        if (kakaoAuthToken !== undefined || naverAuthToken !== undefined) {
            if (kakaoAuthToken) {
                kakaoLogin(kakaoAuthToken);
            } else {
                naverGetToken(naverAuthToken);
            }
        }
    }, [])

    //! 카카오 로그인 함수
    const kakaoLogin = async (authCode: string) => {
        const formUrlEncoded = (x: any) =>
            Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
        const getTokenURL = "https://kauth.kakao.com/oauth/token"
        const headers = {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }

        await axios.post(getTokenURL,
            formUrlEncoded({
                grant_type: "authorization_code",
                client_id: KAKAO_REST_API_KEY,
                redirect_uri: REDIRECT_URI,
                code: authCode
            })
            , { headers }
        )
            .then(async (res) => {
                const accessToken = res.data.access_token;
                const expires_in = res.data.expires_in;
                //todo 해당 부분 수정해야한다 :) 
                const callAPIURL = "http://101.101.217.55:8080/api/member/kakao/login";
                await axios.get(callAPIURL, {
                    params: {
                        accessToken: accessToken,
                        expiresIn: expires_in
                    },
                    withCredentials: true
                })
                    .then((res) => {
                        //todo back API 호출부! 백쪽에서 개발이 완료되면 여기서
                        //todo localStorage에 setItem 해줘야한다. :)
                    })
            })
    }

    //! 네이버 로그인 함수
    const naverInit = () => {
        naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_Client_ID, // ClientID
            callbackUrl: REDIRECT_URI,
            isPopup: false, // 팝업 형태로 인증 여부
            loginButton: {
                color: 'green', // 색상
                type: 3, // 버튼 크기
                height: '60' // 버튼 높이
            }, // 로그인 버튼 설정
        })
        naverLogin.init();
    }

    const naverGetToken = (authCode: string) => {
        console.log('');
        const token: string = authCode.split('=')[1].split('&')[0]; // 네이버 로그인을 통해 전달받은 hash 값
        const token_type: string = authCode.split("token_type=")[1].split('&')[0];
        const expires_in: string = authCode.split("expires_in=")[1];
        if (token) {
            naverLogin.getLoginStatus((status: any) => {
                if (status) { // 로그인 상태 값이 있을 경우
                    debugger
                    //? 토큰 값 백으로 전달하기 :)
                }
            });
        }
    }


    const onBtnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, type: string) => {
        e.preventDefault();
        if (type === "kakao") {
            window.location.href = KAKAO_AUTH_URL;
        }
    };


    return (
        <div>
            테스트용 로그인 페이지
            <br />

            <div id='naverIdLogin' />

            <KakaoLoginButtonCase onClick={(e) => onBtnClick(e, 'kakao')}>
                <img
                    src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                    width="285"
                />
            </KakaoLoginButtonCase>
        </div>
    )
}

const KakaoLoginButtonCase = styled.a`
id: custom-login-btn;
cursor: pointer;
`;

export default Login;