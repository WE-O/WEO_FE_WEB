import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { deleteModal } from '../../../store/modules/ModalSlice';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
import DetailModalContent from './DetailModalContent';

interface Props {
  isTop: boolean;
}

const DetailModal: React.FC<Props> = (props: Props) => {
  const detailRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  // isTop관련 정리하기 => useOnClickOutside multiple elements 에러
  useOnClickOutside(
    detailRef,
    () => dispatch(deleteModal('detailModal')),
    props.isTop,
  );

  return (
    <DetailModalWrapper ref={detailRef}>
      <ColorArea />
      <DetailModalContent />
    </DetailModalWrapper>
  );
};

export default DetailModal;

const ColorArea = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 10px;
  background: ${(props) => props.theme.primaryGreen};
`;

const DetailModalWrapper = styled.div`
  width: 1200px;
  height: 600px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  color: black;
  position: absolute;
`;
