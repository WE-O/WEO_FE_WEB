import styled from 'styled-components';
import { useRef } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { deleteModal } from '../../../store/modules/ModalSlice';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
// import DetailModalHeader from './DetailModalHeader';
import DetailModalContent from './DetailModalContent';

const DetailModal = () => {
  const detailRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useOnClickOutside(detailRef, () => dispatch(deleteModal('detailModal')));

  return (
    <DetailModalWrapper ref={detailRef}>
      {/* <DetailModalHeader /> */}
      <DetailModalContent />
    </DetailModalWrapper>
  );
};

export default DetailModal;

const DetailModalWrapper = styled.div`
  width: 1200px;
  height: 600px;
  padding: 40px;
  background-color: white;
  border-radius: 30px;
  color: black;

  // position: absolute;
  // top: 100px;
`;
