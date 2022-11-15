import { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { deleteModal } from '../../../store/modules/ModalSlice';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';

interface Props {
  isTop: boolean;
}

const AlertModal = (props: Props) => {
  const dispatch = useAppDispatch();
  const modalParam = useAppSelector((state) => state.modal.modalParam);

  debugger;
  debugger;

  const alertRef = useRef<HTMLDivElement>(null);

  const closeReviewModal = useCallback(() => {
    dispatch(deleteModal('alertModal'));
  }, []);

  useOnClickOutside(alertRef, () => closeReviewModal(), props.isTop);

  return (
    <AlertModalWrapper ref={alertRef}>
      <AlertTextArea>등록하시겠습니까?</AlertTextArea>

      <AlertBtnArea>
        <AlertCancelBtn>취소</AlertCancelBtn>
        <AlertOkBtn>등록</AlertOkBtn>
      </AlertBtnArea>
    </AlertModalWrapper>
  );
};

export default AlertModal;

const AlertModalWrapper = styled.div`
  width: 440px;
  height: 170px;
  padding: 20px;
  background: white;
`;

const AlertTextArea = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const AlertBtnArea = styled.div`
  height: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const AlertCancelBtn = styled.button`
  width: 170px;
  height: 40px;
  background: white;
  border: 1px solid lightgray;
  color: gray;
  border-radius: 5px;
  cursor: pointer;
`;

const AlertOkBtn = styled.button`
  width: 170px;
  height: 40px;
  background: ${(props) => props.theme.primaryGreen};
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
