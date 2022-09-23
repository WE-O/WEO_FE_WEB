import styled from "styled-components";

import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLeftDefaultCss";

const LocCertifyItem = styled.div`
  box-sizing: border-box;

  width: 94px;
  height: 28px;

  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #999999;
`;

const MainLeftDefaultTop = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        {"시흥시 은행동"}
        <LocCertifyItem>현재 위치 인증</LocCertifyItem>
      </MainLeftDeafultItemTitle>
      <MainLeftDefaultContents></MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftDefaultTop;
