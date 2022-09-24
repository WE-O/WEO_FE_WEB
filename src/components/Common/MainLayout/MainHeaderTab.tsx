import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openModal, closeModal } from "../../../store/modules/LoginSlice";

const MainHeaderTab = () => {
  const dispatch = useAppDispatch();

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
      <Button onClick={() => dispatch(openModal(true))}>로그인</Button>
    </MainHeaderTabWrapper>
  );
};

const MainHeaderTabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 26px;

  gap: 24px;
  @media ${(props) => props.theme.mobile} {
    gap: 12px;
  }
`;

const MainHeaderTabItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  height: 26px;

  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export default MainHeaderTab;
