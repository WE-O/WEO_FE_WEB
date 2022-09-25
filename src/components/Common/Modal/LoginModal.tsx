import React, { ReactElement, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import NaverLogin from "../../../pages/Test/NaverLogin";
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

const LoginModal = (props: props): ReactElement => {
  const loginRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useOnClickOutside(loginRef, () => dispatch(closeModal(false)));

  return (
    <LoginModalWrapper ref={loginRef}>
      로그인 모달 테스트
      <br />
      <br />
      <NaverLogin name={"NaverLogin"} />
      <br />
    </LoginModalWrapper>
  );
};

export default LoginModal;
