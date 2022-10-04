import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLefCss";

const MainLeftOffer = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        {"식집사를 위한 장소 추천"}
      </MainLeftDeafultItemTitle>
      <MainLeftDefaultContents height={"270px"}></MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftOffer;
