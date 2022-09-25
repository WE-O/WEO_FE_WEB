import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

const KakaoLoginButtonCase = styled.button`
  
`;

export const KakaoLoginButton = () => {
    useEffect(() => {
        const res = async () => {
            await axios.get('http://101.101.217.55:8080/api/member/kakao/3').then((res) => {
            })
        }
        res();
    }, [])

    return (
        <div>
            TEST
        </div>
    )
}
