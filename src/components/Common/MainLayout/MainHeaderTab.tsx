import styled from "styled-components";
import Button from "../Button";
import Link from "next/link";

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
  cursor : pointer;
`;

const MainHeaderTab = () => {
  return (
    <MainHeaderTabWrapper>
      <Link href="/"><MainHeaderTabItem>장소 검색</MainHeaderTabItem></Link>
      <Link href="/"><MainHeaderTabItem>인기 장소</MainHeaderTabItem></Link>
      <Link href="/"><MainHeaderTabItem>식물 키우기 사전</MainHeaderTabItem></Link>
      <Link href="/"><MainHeaderTabItem>제보하기</MainHeaderTabItem></Link>
      <Button>로그인</Button>
      {/* 로그인 / 마이페이지  */}
    </MainHeaderTabWrapper>
  );
};

export default MainHeaderTab;
