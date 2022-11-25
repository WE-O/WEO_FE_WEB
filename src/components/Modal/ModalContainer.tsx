import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import DetailModal from './DetailModal/DetailModal';
import ReviewModal from './ReviewModal/ReviewModal';
import CommonModal from './CommonModal/CommonModal';
import AlertModal from './AlertModal/AlertModal';
import { ChangeModal, RequestModal } from './MyPageModal';


const ModalContanier = () => {
  const modalList = useAppSelector((state) => state.modal.modalList);

  useEffect(() => {
    if (modalList.length > 0) {
      // 모달 열 때 외부 스크롤 방지
      document.body.style.overflow = 'hidden';

      // 모달 닫을 떄 외부 스크롤 방지 해제
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [modalList]);

  return (
    <>
      {modalList.length > 0 &&
        modalList.map((item: string, idx) => {
          if (item === 'detailModal')
            return (
              <ModalContainerWrapper key={`modal_${item}`}>
                <DetailModal
                  key={`DetailModal${item}`}
                  isTop={idx === modalList.length - 1}
                />
              </ModalContainerWrapper>
            );

          if (item === 'reviewModal')
            return (
              <ModalContainerWrapper key={`modal_${item}`}>
                <ReviewModal
                  key={`ReviewModal${item}`}
                  isTop={idx === modalList.length - 1}
                />
              </ModalContainerWrapper>
            );

          if (item === 'commonModal')
            return (
              <ModalContainerWrapper key={`modal_${item}`}>
                <CommonModal
                  key={`CommonModal${item}`}
                  isTop={idx === modalList.length - 1}
                />
              </ModalContainerWrapper>
            );
          if (item === 'requestModal')
            return (
              <ModalContainerWrapper key={`modal_${item}`}>
                <RequestModal
                  key={`RequestModal${item}`}
                  isTop={idx === modalList.length - 1}
                />
              </ModalContainerWrapper>
            );
          if (item === 'changeModal')
            return (
              <ModalContainerWrapper key={`modal_${item}`}>
                <ChangeModal
                  key={`ChangeModal${item}`}
                  isTop={idx === modalList.length - 1}
                />
              </ModalContainerWrapper>
            );
        
          if (item === 'alertModal')
            return (
              <ModalContainerWrapper>
                <AlertModal isTop={idx === modalList.length - 1} />
              </ModalContainerWrapper>
            );
        })}
    </>
  );
};

export default ModalContanier;

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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  -webkit-scrollbar {
    display: none;
  }
`;
