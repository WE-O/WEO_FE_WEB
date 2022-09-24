import React, { ReactElement } from 'react';
import styled from "styled-components";

interface props {
    isOpen: boolean;
    close: () => void; // 함수 타입 정의할 때
}

const LoginModalWrapper = styled.div`
   align - items: center;
    background - color: rgba(0, 0, 0, 0.5);
    display: flex;
    height: 100 %;
    justify - content: center;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100 %;
    z - index: 100;
`;

const LoginModal = (props: props): ReactElement => {
    const { isOpen, close } = props;

    return (
        <LoginModalWrapper/>
    );
};

export default LoginModal;