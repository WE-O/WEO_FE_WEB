import styled, { css } from "styled-components";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { leftArrow, rightArrow } from "../../../../../utils/images";

const MainLeftOfferCarouse = () => {
  const CarouseWrapperRef = useRef<HTMLDivElement>(null);
  const offsetX = useRef<number>(0);
  const totalItemCnt = useRef<number>(3); //임시 테스트용
  const curItemCnt = useRef<number>(1); //임시 테스트용

  const onHandleClick = useCallback(
    (type: string): void => {
      if (type === "prev") {
        if (curItemCnt.current === 1) return;
        offsetX.current += 258;
        curItemCnt.current -= 1;
      }

      if (type === "next") {
        if (curItemCnt.current === totalItemCnt.current) return;
        offsetX.current -= 258;
        curItemCnt.current += 1;
      }

      if (CarouseWrapperRef.current) {
        CarouseWrapperRef.current.style.transform = `translateX(${offsetX.current}px)`;
      }
    },
    [CarouseWrapperRef]
  );

  return (
    <>
      <CarouseArrow case="left" onClick={() => onHandleClick("prev")}>
        <Image src={leftArrow} alt="" />
      </CarouseArrow>

      <Carouse>
        <CarouseWrapper ref={CarouseWrapperRef}>
          <MainLeftOfferItemBlank />

          <MainLeftOfferItem>
            <MainLeftOfferItemImage></MainLeftOfferItemImage>
            <MainLeftOfferItemContent>
              <MainLeftOfferItemHeader>
                (1)시흥 블루베리
              </MainLeftOfferItemHeader>
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
              <MainLeftOfferItemHeader>
                (2)시흥 블루베리
              </MainLeftOfferItemHeader>
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
              <MainLeftOfferItemHeader>
                (3)시흥 블루베리
              </MainLeftOfferItemHeader>
              <MainLeftOfferItemDetail>
                <span>체험기간</span>
                <MainLeftOfferItemDetailReview>
                  리뷰 100개
                </MainLeftOfferItemDetailReview>
              </MainLeftOfferItemDetail>
              <MainLeftOfferItemLabel>이번주에 가볼만한</MainLeftOfferItemLabel>
            </MainLeftOfferItemContent>
          </MainLeftOfferItem>

          <MainLeftOfferItemBlank />
        </CarouseWrapper>
      </Carouse>

      <CarouseArrow case="right" onClick={() => onHandleClick("next")}>
        <Image src={rightArrow} alt="" />
      </CarouseArrow>
    </>
  );
};

export default MainLeftOfferCarouse;

const Carouse = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const CarouseWrapper = styled.div`
  display: flex;
  cursor: grab;
  transition: 0.3s;
`;

const CarouseArrow = styled.button<{
  case: string;
}>`
  position: absolute;
  top: 50%;
  z-index: 1;
  border: none;
  background: rgba(250, 250, 250, 0.3);
  height: 100%;
  transform: translateY(-50%);
  cursor: pointer;

  ${(Props) =>
    Props.case === "left" &&
    css`
      left: 0;
    `}

  ${(Props) =>
    Props.case === "right" &&
    css`
      right: 0;
    `}
`;

const MainLeftOfferItemBlank = styled.div`
  width: 56px;
  height: 100%;
`;

const MainLeftOfferItem = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #cccccc;
  margin: 10px 9px;
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
