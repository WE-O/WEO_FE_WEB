import styled, { css } from 'styled-components';

const MainLeftOfferWrapperItem = () => {
  return (
    <>
      <MainLeftOfferWrapperItems>
        <MainLeftOfferWrapperItemsHeader>
          <ItemsHaderSpan type="titleText">시흥 블루베리</ItemsHaderSpan>
          <ItemsHaderSpan type="markText">이번주에 가볼만한</ItemsHaderSpan>
          <ItemsHaderSpan type="reviewText">리뷰</ItemsHaderSpan>
        </MainLeftOfferWrapperItemsHeader>

        <ItemsHaderSpan type="roadText">
          서울시 도봉구 도봉로 143길 60 102호
        </ItemsHaderSpan>
      </MainLeftOfferWrapperItems>

      <MainLeftOfferWrapperItems>
        <MainLeftOfferWrapperItemsHeader>
          <ItemsHaderSpan type="titleText">시흥 블루베리2</ItemsHaderSpan>
          <ItemsHaderSpan type="markText">이번주에 가볼만한</ItemsHaderSpan>
          <ItemsHaderSpan type="reviewText">리뷰</ItemsHaderSpan>
        </MainLeftOfferWrapperItemsHeader>

        <ItemsHaderSpan type="roadText">
          서울시 도봉구 도봉로 143길 60 102호
        </ItemsHaderSpan>
      </MainLeftOfferWrapperItems>

      <MainLeftOfferWrapperItems>
        <MainLeftOfferWrapperItemsHeader>
          <ItemsHaderSpan type="titleText">시흥 블루베리3</ItemsHaderSpan>
          <ItemsHaderSpan type="markText">이번주에 가볼만한</ItemsHaderSpan>
          <ItemsHaderSpan type="reviewText">리뷰</ItemsHaderSpan>
        </MainLeftOfferWrapperItemsHeader>

        <ItemsHaderSpan type="roadText">
          서울시 도봉구 도봉로 143길 60 102호
        </ItemsHaderSpan>
      </MainLeftOfferWrapperItems>

      <MainLeftOfferWrapperItems>
        <MainLeftOfferWrapperItemsHeader>
          <ItemsHaderSpan type="titleText">시흥 블루베리4</ItemsHaderSpan>
          <ItemsHaderSpan type="markText">이번주에 가볼만한</ItemsHaderSpan>
          <ItemsHaderSpan type="reviewText">리뷰</ItemsHaderSpan>
        </MainLeftOfferWrapperItemsHeader>

        <ItemsHaderSpan type="roadText">
          서울시 도봉구 도봉로 143길 60 102호
        </ItemsHaderSpan>
      </MainLeftOfferWrapperItems>
    </>
  );
};

export default MainLeftOfferWrapperItem;

const MainLeftOfferWrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 20px 0px;
`;

const MainLeftOfferWrapperItemsHeader = styled.div`
  display: flex;
  gap: 45px;
`;

const ItemsHaderSpan = styled.span<{ type: string }>`
  ${(Props) =>
    Props.type === 'titleText' &&
    css`
      font-size: 16px;
      font-weight: 700;
    `}

  ${(Props) =>
    Props.type === 'markText' &&
    css`
      display: flex;
      align-items: center;
      background: ${(props) => props.theme.primaryGreen};
      border-radius: 5px;
      padding: 0 10px;
      color: white;
      font-size: 12px;
    `}

  ${(Props) =>
    Props.type === 'reviewText' &&
    css`
      display: flex;
      align-items: center;
      font-size: 12px;
      color: ${(props) => props.theme.grey1};
    `}

    ${(Props) =>
    Props.type === 'roadText' &&
    css`
      font-size: 14px;
    `}
`;
