import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalContanier = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ModalContainerWrapper>
            </ModalContainerWrapper>
        </>
    );
};