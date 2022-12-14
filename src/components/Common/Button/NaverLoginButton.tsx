import { useState, useEffect } from "react"
import Router from "next/router";

type AppProps = {

}

export const NaverLoginButton: React.FC<AppProps> = (props) => {

    useEffect(() => {
        const naver = (window as any).naver;
        let naverLogin: any;

        const login = () => {
            naverLogin = new naver.LoginWithNaverId({
                clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
                callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
                isPopup: false, // 팝업 형태로 인증 여부
                loginButton: {
                    color: 'green', // 색상
                    type: 3, // 버튼 크기
                    height: '60' // 버튼 높이
                }, // 로그인 버튼 설정
            })

            naverLogin.init();
        }

        const getToken = () => {
            const hash = Router.asPath.split('#')[1]; // 네이버 로그인을 통해 전달받은 hash 값
            if (hash) {
                const token = hash.split('=')[1].split('&')[0]; // token값 확인
                naverLogin.getLoginStatus((status: any) => {
                    if (status) { // 로그인 상태 값이 있을 경우

                         
                    }
                });
            }
        }
        login();
        getToken();
    }, [])


    return (
        <div id='naverIdLogin' />
    )
}