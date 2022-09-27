import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { NaverLoginButton } from "../../components/Common/Button/NaverLoginButton";
import { KakaoLoginButton } from "../../components/Common/Button/KakaoLoginButton";


const Login = () => {

    useEffect(() => {
        let a = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
        let b = process.env.MY_VAR;
        debugger
    },[])

    return (
        <div>
            테스트용 로그인 페이지
            <br />
            <br />
            <div style={{ width: "100px", background: "red", height :"100px"}}>
                {process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}
                {process.env.MY_VAR}
            </div>
            <br />
            <br />
            <NaverLoginButton />

            <KakaoLoginButton />
        </div>
    )
}

export default Login;