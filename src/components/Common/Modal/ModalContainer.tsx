import { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";

export const ModalContainerWrapper = styled.div`
  top: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContanier = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModalHandler = () => {
  //     setIsOpen(!isOpen);
  // };

  return (
    <>
      <ModalContainerWrapper>
        <LoginModal />
      </ModalContainerWrapper>
    </>
  );
};

export default ModalContanier;
