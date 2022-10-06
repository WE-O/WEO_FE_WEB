import styled from "styled-components";
import {
  MainLeftWeather,
  MainLeftPlace,
  MainLeftOffer,
  MainLeftSearchTitle,
  MainLeftSearchContent,
} from "./index";

const MainLeftWrapper = styled.div`
  width: 400px;
  height: 700px;
  padding: 0 10px 0 0;

  font-size: 15px;
  // @media ${(props) => props.theme.mobile} {
  //   font-size: 13px;
  // }
`;

const MainLeft = () => {
  return (
    <MainLeftWrapper>
      {/* <MainLeftSearchTitle />
      <MainLeftSearchContent /> */}
      <MainLeftWeather />
      <MainLeftPlace />
      <MainLeftOffer />
    </MainLeftWrapper>
  );
};

export default MainLeft;
