import React, { ReactElement, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { NaverLoginButton } from "../../../components/Common/Button/NaverLoginButton";
import { KakaoLoginButton } from "../../../components/Common/Button/KakaoLoginButton";
import { useAppDispatch } from "../../../store/hooks";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { closeModal } from "../../../store/modules/LoginSlice";

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

const KakagoLogin = styled.a`
id:custom-login-btn;
cursor: pointer;
`;

const LoginModal = (props: props): ReactElement => {
  const loginRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useOnClickOutside(loginRef, () => dispatch(closeModal(false)));


  
  return (
    <LoginModalWrapper ref={loginRef}>
      로그인 모달 테스트
      <br />
      <br />
      {/* <NaverLoginButton /> */}
      <br />

      
      <KakaoLoginButton/>

      <KakagoLogin>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="285"
        />
      </KakagoLogin>

    </LoginModalWrapper>
  );
};

export default LoginModal;
