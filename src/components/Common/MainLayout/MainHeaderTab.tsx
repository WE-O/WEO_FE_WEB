import styled from "styled-components";
import Button from "../Button";

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
`;

const MainHeaderTab = () => {
  return (
    <MainHeaderTabWrapper>
      <MainHeaderTabItem>장소 검색</MainHeaderTabItem>
      <MainHeaderTabItem>인기 장소</MainHeaderTabItem>
      <MainHeaderTabItem>식물 키우기 사전</MainHeaderTabItem>
      <MainHeaderTabItem>제보하기</MainHeaderTabItem>
      <Button>로그인</Button>
    </MainHeaderTabWrapper>
  );
};

export default MainHeaderTab;
