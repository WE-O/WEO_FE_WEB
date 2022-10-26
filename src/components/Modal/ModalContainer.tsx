import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import DetailModal from './DetailModal/DetailModal';
import ReviewModal from './ReviewModal/ReviewModal';

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
      {modalList.length > 0 && (
        <ModalContainerWrapper>
          {modalList.includes('detailModal') && (
            <DetailModal key={'detailModal'} />
          )}

          {modalList.includes('reviewModal') && (
            <ReviewModal key={'reviewModal'} />
          )}
        </ModalContainerWrapper>
      )}
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
