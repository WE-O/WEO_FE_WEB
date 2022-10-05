import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const KakaoLoginButtonCase = styled.a`
id: custom-login-btn;
cursor: pointer;
`;

export const KakaoLoginButton = () => {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&response_type=code`;

    const onBtnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <KakaoLoginButtonCase onClick={(e) => onBtnClick(e)}>
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="285"
            />
        </KakaoLoginButtonCase>

    )
}
