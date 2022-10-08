import styled, { css } from 'styled-components';
import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
} from './MainLefCss';
import MainLeftOfferCarouse from './MainLeftOfferCarouse';

const MainLeftOffer = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        <span>식집사를 위한 장소 추천</span>
        <MainLeftOfferSpan>더보기</MainLeftOfferSpan>
      </MainLeftDeafultItemTitle>
      <MainLeftOfferWrapper>
        <MainLeftOfferCarouse />
      </MainLeftOfferWrapper>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftOffer;

const MainLeftOfferWrapper = styled.div`
  border: none;
  height: 305px;
  position: relative;
  width: 100%;
`;

const MainLeftOfferSpan = styled.span`
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;
