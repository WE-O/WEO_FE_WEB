import styled from 'styled-components';
import { cancel } from '../../../utils/images';
import Image from 'next/image';
import { useRef } from 'react';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
import { deleteModal } from '../../../store/modules/ModalSlice';
import { useAppDispatch } from '../../../store/hooks';

interface ModalType {
  title?: string;
  text?: string;
  placeHolder?: string;

  leftButtonText?: string;
  leftButtonStyle?: any;
  leftButtonFunc?: any;

  rightButtonText?: string;
  rightButtonStyle?: any;
  rightButtonFunc?: any;

  handleOnClose?: any;
}

const CommonModal = (props: ModalType) => {
  const dispatch = useAppDispatch();
  const changeNickNameRef = useRef(null);

  useOnClickOutside(changeNickNameRef, () =>
    dispatch(deleteModal('commonModal')),
  );

  const handleOnClick = (e: React.MouseEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    switch (type) {
      case 'close':
        dispatch(deleteModal('commonModal'));
        break;
      default:
        break;
    }
  };

  return (
    <ModalBox ref={changeNickNameRef}>
      <CloseButton onClick={(e) => handleOnClick(e, 'close')}>
        <Image src={cancel} />
      </CloseButton>
      모달
    </ModalBox>
  );
};

export default CommonModal;

const ModalBox = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 440px;
  height: 300px;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
`;

const CloseButton = styled.button`
  padding: 20px;
  width: 63px;
  border: 0;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius : 500px;
`;