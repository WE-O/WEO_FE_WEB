import styled from "styled-components";

import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLefCss";

const LocCertifyItem = styled.div`
  box-sizing: border-box;

  width: 94px;
  height: 28px;

  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 10px;

  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #999999;
`;

const MainLeftWeather = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>{"시흥시 은행동"}</MainLeftDeafultItemTitle>
      <MainLeftDefaultContents></MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftWeather;
