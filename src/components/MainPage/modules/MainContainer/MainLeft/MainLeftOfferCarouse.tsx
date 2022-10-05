import styled, { css } from "styled-components";

const MainLeftOfferCarouse = () => {
  return (
    <CarouseWrapper>
      <MainLeftOfferItem>
        <MainLeftOfferItemImage></MainLeftOfferItemImage>
        <MainLeftOfferItemContent>
          <MainLeftOfferItemHeader>시흥 블루베리</MainLeftOfferItemHeader>
          <MainLeftOfferItemDetail>
            <span>체험기간</span>
            <MainLeftOfferItemDetailReview>
              리뷰 100개
            </MainLeftOfferItemDetailReview>
          </MainLeftOfferItemDetail>
          <MainLeftOfferItemLabel>이번주에 가볼만한</MainLeftOfferItemLabel>
        </MainLeftOfferItemContent>
      </MainLeftOfferItem>

      <MainLeftOfferItem>
        <MainLeftOfferItemImage></MainLeftOfferItemImage>
        <MainLeftOfferItemContent>
          <MainLeftOfferItemHeader>시흥 블루베리</MainLeftOfferItemHeader>
          <MainLeftOfferItemDetail>
            <span>체험기간</span>
            <MainLeftOfferItemDetailReview>
              리뷰 100개
            </MainLeftOfferItemDetailReview>
          </MainLeftOfferItemDetail>
          <MainLeftOfferItemLabel>이번주에 가볼만한</MainLeftOfferItemLabel>
        </MainLeftOfferItemContent>
      </MainLeftOfferItem>

      <MainLeftOfferItem>
        <MainLeftOfferItemImage></MainLeftOfferItemImage>
        <MainLeftOfferItemContent>
          <MainLeftOfferItemHeader>시흥 블루베리</MainLeftOfferItemHeader>
          <MainLeftOfferItemDetail>
            <span>체험기간</span>
            <MainLeftOfferItemDetailReview>
              리뷰 100개
            </MainLeftOfferItemDetailReview>
          </MainLeftOfferItemDetail>
          <MainLeftOfferItemLabel>이번주에 가볼만한</MainLeftOfferItemLabel>
        </MainLeftOfferItemContent>
      </MainLeftOfferItem>
    </CarouseWrapper>
  );
};

export default MainLeftOfferCarouse;

const CarouseWrapper = styled.div`
  width: 1000px;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

const MainLeftOfferItem = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #cccccc;
  margin: 0 9px;
  width: 240px;
  height: 280px;
`;

const MainLeftOfferItemImage = styled.div`
  width: 210px;
  height: 180px;
  margin: 10px 15px;
  background: tan;
`;

const MainLeftOfferItemContent = styled.div`
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const MainLeftOfferItemHeader = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const MainLeftOfferItemDetail = styled.div`
  font-size: 12px;
      display: flex;
    justify-content: space-between;
}
`;
const MainLeftOfferItemDetailReview = styled.span`
  color: #999999;
`;

const MainLeftOfferItemLabel = styled.span`
  background: ${(props) => props.theme.primaryGreen};
  width: 105px;
  height: 20px;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`;
