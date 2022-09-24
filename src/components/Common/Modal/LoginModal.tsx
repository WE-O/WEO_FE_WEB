import React, { ReactElement } from 'react';
import styled from "styled-components";
import NaverLogin from "../../../pages/Test/NaverLogin";

interface props {
    // isOpen: boolean;
    // close: () => void; // 함수 타입 정의할 때
}

const LoginModalWrapper = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  border-radius: 30px;
  color: black;
`;

const LoginModal = (props: props): ReactElement => {
    

    return (
        <LoginModalWrapper>
            로그인 모달 테스트
            <br />
            <br />
            <NaverLogin name={"NaverLogin"} />
            <br />
        </LoginModalWrapper>
    );
};

export default LoginModal;