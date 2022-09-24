import { useState, useEffect } from "react"
import Router from "next/router";

type AppProps = {
    name: string
}

const NaverLogin: React.FC<AppProps> = (props) => {

    const NAVER_Client_ID: String = "HrncQLotFM9Or9LgmUjG";
    const NAVER_Client_Secret: String = "Vzg4KYhZUF";


    useEffect(() => {
        const naver = (window as any).naver;
        let naverLogin: any;

        const login = () => {
            naverLogin = new naver.LoginWithNaverId({
                clientId: NAVER_Client_ID, // ClientID
                callbackUrl: 'http://localhost:3000/Test/NaverLogin', // Callback URL
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

                        debugger

                        Router.push({
                            pathname: 'http://localhost:3000/main/Test/NaverLogin',
                            query: {
                                token: token,
                            }
                        })
                    }
                });
            }
        }
        login();
        getToken();
    }, [])

    const UserProfile = () => {
        location.href.includes('access_token') && getUser();
    };
    const getUser = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        //todo 여기 토큰 값을 back으로 전달하면 된다!.
        console.log(token);
    };
    useEffect(UserProfile, []);



    return (
        <div style={{ marginLeft: "100px", marginTop: "50px" }}>
            <br />
            <div>네이버 로그인 테스트</div>
            <div id='naverIdLogin' />
        </div>

    )
}

export default NaverLogin;