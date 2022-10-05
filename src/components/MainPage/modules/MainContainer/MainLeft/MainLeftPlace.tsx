import styled, { css } from "styled-components";
import Link from "next/link";
import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLefCss";

const MainLeftPlace = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>{"저장한 장소"}</MainLeftDeafultItemTitle>
      <MainLeftPlaceContents>
        <MainLeftPlaceItem>로그인하고 장소를 저장해보세요!</MainLeftPlaceItem>
        <Link href="/login">
          <MainLeftPlaceBtn>로그인 하러가기</MainLeftPlaceBtn>
        </Link>
      </MainLeftPlaceContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftPlace;

const MainLeftPlaceContents = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MainLeftPlaceItem = styled.span`
  height: 20px;
  font-size: 14px;
  color: #999999;
`;

const MainLeftPlaceBtn = styled.button`
  width: 90px;
  height: 30px;
  font-size: 10px;
  color: white;
  border: none;
  border-radius: 10px;
  background: #999999;
  cursor: pointer;
`;
