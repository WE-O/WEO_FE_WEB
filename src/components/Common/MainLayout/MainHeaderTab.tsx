import styled from "styled-components";

const MainHeaderTabWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  // width: 436px;
  height: 26px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const MainHeaderTabItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px;
  gap: 8px;

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
    </MainHeaderTabWrapper>
  );
};

export default MainHeaderTab;
