import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLeftDefaultCss";

const MainLeftDefaultMid = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>{"저장한 장소"}</MainLeftDeafultItemTitle>
      <MainLeftDefaultContents></MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftDefaultMid;
