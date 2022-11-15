import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { call } from '../../../api/apis';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addModal } from '../../../store/modules/ModalSlice';
import AddressInfo from './AddressInfo';
import PriceInfo from './PriceInfo';
import ReviewInfo from './ReviewInfo';
import { detailDataType } from './utils/type';

const defaultData = {
  addressName: '',
  categoryGroupCode: '',
  categoryGroupName: '',
  distance: '',
  phone: '',
  placeId: '',
  placeName: '',
  placeUrl: '',
  reviews: 0,
  roadAddressName: '',
  views: 0,
  x: '',
  y: '',
};

const selectType: string[] = [
  '상세정보',
  '식물집사가 작성한 방문후기',
  '식물집사가 선택한 키워드',
];

const DetailModalContentHeader = () => {
  const dispatch = useAppDispatch();
  const [detailData, setDetailData] = useState<detailDataType>(defaultData);
  const [type, setType] = useState<string>('type0');

  const modalParam = useAppSelector((state) => state.modal.modalParam);

  /* joint
  useEffect(() => {
    const getDetail = async () => {
      const res: detailDataType = await call('GET', {
        url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/places/${modalParam.selectId}`,
        data: {},
      });

      setDetailData(res);
    };

    getDetail();
  }, []);
  */

  const changeType = useCallback((clickType: string): void => {
    setType(clickType);
  }, []);

  const onClickReview = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      dispatch(addModal('reviewModal'));
    },
    [],
  );

  return (
    <>
      <DetailModalHeaderWrapper>
        <HeaderSpan case="title">{detailData.placeName}</HeaderSpan>
        <HeaderSpan case="sub">{detailData.categoryGroupName}</HeaderSpan>
        {modalParam.isLogin && (
          <DetailModalHeaderLink>
            <DetailModalHeaderLinkItem onClick={onClickReview}>
              후기 작성하기
            </DetailModalHeaderLinkItem>
            <DetailModalHeaderLinkItem>
              정보 수정 요청
            </DetailModalHeaderLinkItem>
          </DetailModalHeaderLink>
        )}
      </DetailModalHeaderWrapper>

      <DetailModalContentHeaderWrapper>
        {selectType.map((item, idx) => (
          <DetailModalContentHeaderItem
            isClicked={type === `type${idx}`}
            onClick={() => changeType(`type${idx}`)}
            key={`DetailModalContentHeaderItem_${idx}`}
          >
            {item}
          </DetailModalContentHeaderItem>
        ))}
      </DetailModalContentHeaderWrapper>

      <DetailModalContentMainWrapper>
        {type === 'type0' && <AddressInfo detailData={detailData} />}
        {type === 'type1' && (
          <ReviewInfo
            modalParam={modalParam}
            onClickReview={onClickReview}
            isLogin={modalParam.isLogin}
          />
        )}
      </DetailModalContentMainWrapper>
    </>
  );
};

export default DetailModalContentHeader;

const DetailModalHeaderWrapper = styled.div`
  position: relative;
  text-align: center;
  text-decoration: none;
  margin: 0px 0px 30px 0px;
`;

const DetailModalHeaderLink = styled.div`
  display: flex;
  top: 0px;
  gap: 20px;
  position: absolute;
  right: 0px;
`;

const DetailModalHeaderLinkItem = styled.button`
  width: 120px;
  height: 35px;
  color: ${(props) => props.theme.primaryGreen};
  border: ${(props) => `1px solid ${props.theme.primaryGreen}`};
  background: white;
  border-radius: 10px;
  cursor: pointer;
`;

const HeaderSpan = styled.span<{ case: string }>`
  ${(Props) =>
    Props.case === 'title' &&
    css`
      font-weight: 700;
      font-size: 32px;
      margin-right: 20px;
    `}

  ${(Props) =>
    Props.case === 'sub' &&
    css`
      font-size: 16px;
      color: ${(props) => props.theme.grey1};
    `}
`;

const DetailModalContentHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  gap: 70px;
  width: 850px;
  margin: auto;
  justify-content: flex-start;
  align-items: center;
`;

const DetailModalContentHeaderItem = styled.span<{ isClicked: boolean }>`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -1px;
  cursor: pointer;
  padding: 0px 10px 5px 10px;

  color: ${(props) => props.theme.grey1};

  ${(Props) =>
    Props.isClicked &&
    css`
      color: black;
      border-bottom: 3px solid ${(props) => props.theme.primaryGreen};
    `};
`;

const DetailModalContentMainWrapper = styled.div`
  height: 370px;
  width: 850px;
  margin: 50px auto 20px auto;
`;
