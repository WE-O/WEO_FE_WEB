import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Footer } from "../../components/MainPage/modules";
import { loginBanner,naverLoginButton,kakaoLoginButton } from "../../utils/images"

interface innerTextStyleProps {
    readonly textSize?: string;
    readonly textColor?: string;
};

interface imageProps {
    readonly src: any;

    readonly width?: string;
    readonly height?: string;
    readonly placeholder?: string;
};

const Login = () => {

    const REDIRECT_URI = process.env.NEXT_PUBLIC_CALLBACK_URL;
    const KAKAO_REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const NAVER_Client_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const NAVER_Client_Secret = process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    let naverLogin: any;
    let naver: any;

    const naverRef = useRef<any>();
    
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

    const kakaoLogin = (authCode: string) => {
        const formUrlEncoded = (x: any) =>
            Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '')
        const getTokenURL = "https://kauth.kakao.com/oauth/token"
        const headers = {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        }

        axios.post(getTokenURL,
            formUrlEncoded({
                grant_type: "authorization_code",
                client_id: KAKAO_REST_API_KEY,
                redirect_uri: REDIRECT_URI,
                code: authCode
            })
            , { headers }
        )
            .then((res) => {
                const accessToken = res.data.access_token;
                const expires_in = res.data.expires_in;
                //todo 해당 부분 수정해야한다 :) 
                const callAPIURL = "http://101.101.217.55:8080/api/member/kakao/login";
                axios.get(callAPIURL, {
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
        } else if (type === "naver") {
            // 클릭이벤트는 기존 네이버에서 제공하는 div로 연결한다.
            naverRef.current.children[0].click();
        }
    };


    return (
        <LoginPageWrapper>
            <LoginBoxContainer>

                <LoginExplainContainer>
                    <LoginInnerTextWrapper textSize={"24px"} textColor={"black"}>
                        식식물물, 새로운 식물 집사 플랫폼
                    </LoginInnerTextWrapper>

                    <LoginInnerTextWrapper textSize={"16x"} textColor={"gray"}>
                        나와 함께 할 반려식물을 찾아보세요
                    </LoginInnerTextWrapper>

                    <LoginInnerTextWrapper textSize={"26x"}>
                        🪴
                    </LoginInnerTextWrapper>


                </LoginExplainContainer>



                <LoginButtonContainer>
                    {/* display : none */}
                    <div id="naverIdLogin" ref={naverRef} />
                    
                    <LoginButtonCase onClick={(e) => onBtnClick(e, 'naver')}>
                        <LoginButtonImage
                            src={naverLoginButton}
                            placeholder={"blur"}
                        />
                    </LoginButtonCase>
                    
                    <LoginButtonCase onClick={(e) => onBtnClick(e, 'kakao')}>
                        <LoginButtonImage
                            src={kakaoLoginButton} 
                            placeholder={"blur"}
                        />
                    </LoginButtonCase>

                </LoginButtonContainer>
            </LoginBoxContainer>


            <BackgroundImageWrapper>
                <Image
                    src={loginBanner}
                    alt="메인 배경 이미지"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                />
            </BackgroundImageWrapper>
            {/* <Footer/> */}
        </LoginPageWrapper>
    )
}

const LoginButtonCase = styled.a`
    cursor: pointer;
    margin:5px;
`;

const LoginButtonImage = styled(Image) <imageProps>`
    width : 300px;
    height : 45px;
    src:${(props) => props.src};
`

const LoginPageWrapper = styled.div`
    position: relative;
`;

const BackgroundImageWrapper = styled.div`
    width:100%;
    height:100%;
`;

const LoginExplainContainer = styled.div`
    
`;
const LoginInnerTextWrapper = styled.p <innerTextStyleProps>`
    text-align:center;
    font-size: ${(props) => props.textSize};
    color: ${(props) => props.textColor};
    
`;

const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LoginBoxContainer = styled.div`
    border-radius:16px;
    left: 50%;
    top: 35%;
    z-index: 1;
    position: absolute;
    width: 500px;
    height: 487px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export default Login;