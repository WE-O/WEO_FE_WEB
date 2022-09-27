import React, { ReactElement, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { NaverLoginButton } from "../Common/Button/NaverLoginButton";
import { KakaoLoginButton } from "../Common/Button/KakaoLoginButton";
import { useAppDispatch } from "../../store/hooks";
import useOnClickOutside from "./hooks/useOnClickOutside";
import { deleteModal } from "../../store/modules/ModalSlice";

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
  const loginRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useOnClickOutside(loginRef, () => dispatch(deleteModal("login")));

  return (
    <LoginModalWrapper ref={loginRef}>
      로그인 모달 테스트
      <br />
      <br />
      <NaverLoginButton />
      <br />
      <br />
      <KakaoLoginButton />
      <br />
      <br />
    </LoginModalWrapper>
  );
};

export default LoginModal;
