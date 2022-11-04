import styled from 'styled-components';
import Button from '../Button';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addModal } from '../../../store/modules/ModalSlice';
import { userLogIn } from '../../../store/modules/UserSlice';
import React, { useEffect } from 'react';
import { changeMyPageIndex } from '../../../store/modules/MyPageSlice';

const MainHeaderTab = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.user.isLogIn);

  useEffect(() => {
     
    if (localStorage?.getItem("UserInfo") !== null && JSON.parse(localStorage.UserInfo)?.memberId) {
      dispatch(userLogIn());
    }
  }, []);

  const handleOnClick_loginButton = (e: React.MouseEvent<HTMLElement>) => {
     
    e.stopPropagation();
    dispatch(changeMyPageIndex(0));
  }


  return (
    <MainHeaderTabWrapper>
      <Link href="/">
        <MainHeaderTabItem>장소 검색</MainHeaderTabItem>
      </Link>
      <Link href="/">
        <MainHeaderTabItem>인기 장소</MainHeaderTabItem>
      </Link>
      <Link href="/">
        <MainHeaderTabItem>식물 키우기 사전</MainHeaderTabItem>
      </Link>
      <Link href="/">
        <MainHeaderTabItem>제보하기</MainHeaderTabItem>
      </Link>

      {
        <Button
          onClick={() => {
            dispatch(addModal('reviewModal'));
          }}
        >
          Test
        </Button>
      }

      {
        isLogin ?
          <Link href="/mypage">
            <Button onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => handleOnClick_loginButton(e)}>
              마이페이지
            </Button>
          </Link>
          :
          <Link href="/login">
            <Button onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => handleOnClick_loginButton(e)}>
              로그인
            </Button>
          </Link>

      }
    </MainHeaderTabWrapper>
  );
};

const MainHeaderTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 26px;

  gap: 24px;
  // @media ${(props) => props.theme.mobile} {
  //   gap: 12px;
  // }
`;

const MainHeaderTabItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  height: 26px;
  font-weight: 400;
  font-size: 16px;

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export default MainHeaderTab;
