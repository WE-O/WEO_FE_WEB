import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLeftDefaultCss";

const MainLeftDefaultBot = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        {"식집사를 위한 장소 추천"}
      </MainLeftDeafultItemTitle>
      <MainLeftDefaultContents></MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftDefaultBot;
