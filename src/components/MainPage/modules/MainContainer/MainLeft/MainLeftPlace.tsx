import styled, { css } from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
} from './MainLefCss';
import { likeOn } from '../../../../../utils/images';
import { useAppSelector } from '../../../../../store/hooks';

const MainLeftPlace = () => {
  const isLogin = useAppSelector((state) => state.user.isLogIn);

  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        <span>저장한 장소</span>
      </MainLeftDeafultItemTitle>

      {isLogin ? (
        <MainLeftPlaceContents type="Login">
          <MainLeftSavedItem>
            <Image src={likeOn} />
            <span>시흥 블루베리</span>
          </MainLeftSavedItem>
        </MainLeftPlaceContents>
      ) : (
        <MainLeftPlaceContents type="nonLogin">
          <MainLeftPlaceItem>로그인하고 장소를 저장해보세요!</MainLeftPlaceItem>
          <Link href="/login">
            <MainLeftPlaceBtn>로그인 하러가기</MainLeftPlaceBtn>
          </Link>
        </MainLeftPlaceContents>
      )}
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftPlace;

const MainLeftPlaceContents = styled.div<{ type: string }>`
  ${(Props) =>
    Props.type === 'nonLogin' &&
    css`
      border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
      height: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    `}

  ${(Props) =>
    Props.type === 'Login' &&
    css`
      height: 110px;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    `}
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

const MainLeftSavedItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;
