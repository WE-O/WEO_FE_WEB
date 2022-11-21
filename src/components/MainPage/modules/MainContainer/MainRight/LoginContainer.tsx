import axios from "axios";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { loginBanner, naverLoginButton, kakaoLoginButton, plant_icon_2 } from "../../../../../utils/images";
import { useRouter } from 'next/router';
import { useAppDispatch } from "../../../../../store/hooks";
import { userLogIn, SET_userInfo } from "../../../../../store/modules/UserSlice";
import { call } from "../../../../../api/apis"

interface innerTextStyleProps {
    readonly textSize?: string;
    readonly textColor?: string;
};

const Login = () => {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&response_type=code`;
    const naverRef = useRef<any>();
    let naverLogin: any;
    let naver: any;

    const router = useRouter();
    const dispatch = useAppDispatch();



    useEffect(() => {
        if (localStorage?.UserInfo && JSON.parse(localStorage.UserInfo).memberId) {
            router.push("/mypage")
        }
    }, []);

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
                client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
                redirect_uri: process.env.NEXT_PUBLIC_CALLBACK_URL,
                code: authCode
            })
            , { headers }
        )
            .then((res) => {
                const accessToken: string = res.data.access_token;
                CallLoginAPI(accessToken, "kakao");
            })
    }

    const naverInit = () => {
        naverLogin = new naver.LoginWithNaverId({
            clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID, // ClientID
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

    const naverGetToken = (authCode: string) => {
        console.log('');
        const token: string = authCode.split('=')[1]?.split('&')[0]; // 네이버 로그인을 통해 전달받은 hash 값
        const token_type: string = authCode.split("token_type=")[1]?.split('&')[0];
        const expires_in: string = authCode.split("expires_in=")[1];
        if (token) {
            naverLogin.getLoginStatus((status: any) => {
                 
                if (status) { // 로그인 상태 값이 있을 경우
                    console.log("토큰 : ", token);
                    CallLoginAPI(token, "naver");
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

    const handleOnLogin = () => {
        dispatch(userLogIn());
    }

    const CallLoginAPI = (token: string, type: string) => {
        const param = {
            url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/member/join`,
            data: {
                accessToken: token,
                snsType: type,
            }
        }
        const responseData = call("GET", param);
        responseData.then((resData) => {
            handleOnLogin();
             
            localStorage.setItem("UserInfo", JSON.stringify({ memberId: resData.memberId }));
            const userInfoActionPayload = {
                email: resData.email,
                nickname: resData.nickname,
                profileImg: resData.profileImg,
                snsType: resData.snsType
            }
            dispatch(SET_userInfo(userInfoActionPayload));
            router.push("/main");
        }).catch((error) => {
             
        })
    }

    return (
        <LoginPageWrapper>
            <LoginBoxContainer>

                <LoginExplainContainer>
                    <LoginInnerTextWrapper textSize={"26px"} textColor={"black"}>
                        식식물물, 새로운 식물 집사 플랫폼
                    </LoginInnerTextWrapper>

                    <LoginInnerTextWrapper textSize={"16px"} textColor={"gray"}>
                        나와 함께 할 반려식물을 찾아보세요
                    </LoginInnerTextWrapper>

                    <LoginInnerTextWrapper textSize={"40px"}>
                        <Image src={plant_icon_2} />
                    </LoginInnerTextWrapper>
                </LoginExplainContainer>

                <LoginButtonContainer>
                    {/* display : none */}
                    <div id="naverIdLogin" ref={naverRef} />

                    <LoginButtonCase onClick={(e) => onBtnClick(e, 'naver')}>
                        <LoginButtonWrapper>
                            <Image
                                src={naverLoginButton}
                                placeholder={"blur"}
                            />
                        </LoginButtonWrapper>

                    </LoginButtonCase>

                    <LoginButtonCase onClick={(e) => onBtnClick(e, 'kakao')}>
                        <LoginButtonWrapper>
                            <Image
                                src={kakaoLoginButton}
                                placeholder={"blur"}
                            />
                        </LoginButtonWrapper>

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
                    placeholder={"blur"}
                />
            </BackgroundImageWrapper>

        </LoginPageWrapper>
    )
}

const LoginButtonCase = styled.a`
    cursor: pointer;
    margin:5px;
`;

const LoginButtonWrapper = styled.div`
    width:400px;
    height:60px;
`

const LoginPageWrapper = styled.div`
    position: relative;
`;

const BackgroundImageWrapper = styled.div`
    height:100%;
`;

const LoginExplainContainer = styled.div`
    margin-bottom : 20px;
`;
const LoginInnerTextWrapper = styled.p <innerTextStyleProps>`
    text-align:center;
    font-size: ${(props) => props.textSize};
    color: ${(props) => props.textColor};
    
`;

const LoginButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom : 10px;
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