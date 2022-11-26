import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import ReviewModalHeader from './ReviewModalHeader';
import ReviewWrite from './ReviewWrite';
import ReviewContent from './ReviewContent';
import ReviewBottom from './ReviewBottom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import useOnClickOutside from '../../Common/hooks/useOnClickOutside';
import { deleteModal } from '../../../store/modules/ModalSlice';
import { call } from '../../../api/apis';

const keyWordList: { [key: string]: string } = {
  '#친절한': '친절해요',
  '#싱싱한': '식물이 싱싱해요',
  '#다양한': '다양한 식물을 판매해요',
  '#희귀한': '희귀한 식물을 구매할 수 있어요',
  '#합리적인': '가격이 합리적이예요',
  '#화분과흙': '화분이나 흙도 구매할 수 있어요',
  '#가치있는': '비싼만큼 가치있어요',
  '#주차가편한': '주차하기 편해요',
  '#교통이편리한': '교통이 편리해요',
  '#포장가능': '포장이 정성스러워요',
  '#배달가능': '배달서비스를 제공해요',
  '#혼자가도괜찮은': '혼자가도 괜찮아요',
};

interface Props {
  isTop: boolean;
}

const ReviewModal: React.FC<Props> = (props: Props) => {
  const reviewRef = useRef<HTMLDivElement>(null);

  const keywordsRef = useRef(null);
  const contentsRef = useRef(null);

  const modalParam = useAppSelector((state) => state.modal.modalParam);
  const dispatch = useAppDispatch();

  // isTop관련 정리하기 => useOnClickOutside multiple elements 에러
  useOnClickOutside(reviewRef, () => closeReviewModal(), props.isTop);

  const closeReviewModal = useCallback(() => {
    dispatch(deleteModal('reviewModal'));
  }, []);

  const okReviewModal = useCallback(async()=>{

    const contents = contentsRef.current.getContent;
    const keywords = keywordsRef.current.getKeyword.map((item)=> Object.keys(keyWordList).indexOf(item)+1).sort((a,b)=>{
      if(a<b) return -1
      else return 1
    }).join(',');
    const memberID = JSON.parse(localStorage.getItem("UserInfo"))?.memberId;
    const placeId = modalParam.selectId;

    const res = await call("POST", {
      url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/review/${memberID}`,
      data: {
        contents:contents,
        keywords:keywords,
        memberID:memberID,
        placeId:placeId,
      },
    });
    
    closeReviewModal();
    
  },[keywordsRef, contentsRef])

  return (
    <ReviewModalWrapper ref={reviewRef}>
      <ReviewModalHeader 
        placeName={modalParam.detailData.placeName}
        categoryGroupName={modalParam.detailData.categoryGroupName}
      />
      <ReviewContent 
        keyWordList={keyWordList}
        ref={keywordsRef}
      />
      <ReviewWrite 
        ref={contentsRef}
      />
      <AlertSpan>
        (필수) 이미지 저작권 동의 등록된 이미지는 제보내용 확인을 위해
        사용됩니다.
      </AlertSpan>
      <ReviewBottom closeReviewModal={closeReviewModal} okReviewModal={okReviewModal}/>
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
