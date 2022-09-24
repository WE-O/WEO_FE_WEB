import { useEffect, useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

// background: rgba(0, 0, 0, 0.5);
export const ModalContainerWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(2px);
  -webkit-scrollbar {
    display: none;
  }
`;

const ModalContanier = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModalHandler = () => {
  //     setIsOpen(!isOpen);
  // };

  // 모달 열 때
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  // document.body.style.overflow = "unset";

  return (
    <>
      <ModalContainerWrapper>
        <LoginModal />
      </ModalContainerWrapper>
    </>
  );
};

export default ModalContanier;
