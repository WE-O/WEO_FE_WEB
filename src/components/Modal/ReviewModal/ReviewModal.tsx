import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import ReviewModalHeader from './ReviewModalHeader';
import ReviewWrite from './ReviewWrite';
import ReviewContent from './ReviewContent';
import ReviewBottom from './ReviewBottom';
import { useAppDispatch } from '../../../store/hooks';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
import { deleteModal } from '../../../store/modules/ModalSlice';

interface Props {
  isTop: boolean;
}

const ReviewModal: React.FC<Props> = (props: Props) => {
  const reviewRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  // isTop관련 정리하기 => useOnClickOutside multiple elements 에러
  useOnClickOutside(reviewRef, () => closeReviewModal(), props.isTop);

  const closeReviewModal = useCallback(() => {
    dispatch(deleteModal('reviewModal'));
  }, []);

  return (
    <ReviewModalWrapper ref={reviewRef}>
      <ReviewModalHeader />
      <ReviewContent />
      <ReviewWrite />
      <AlertSpan>
        (필수) 이미지 저작권 동의 등록된 이미지는 제보내용 확인을 위해
        사용됩니다.
      </AlertSpan>
      <ReviewBottom closeReviewModal={closeReviewModal} />
    </ReviewModalWrapper>
  );
};

export default ReviewModal;

const ReviewModalWrapper = styled.div`
  width: 700px;
  height: 810px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  position: absolute;
`;

const AlertSpan = styled.span`
  font-size: 16px;
  color: gray;
`;
