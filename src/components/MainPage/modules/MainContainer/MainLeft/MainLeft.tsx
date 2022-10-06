import styled from "styled-components";
import { MainLeftWeather, MainLeftPlace, MainLeftOffer } from "./index";

const MainLeftWrapper = styled.div`
  width: 400px;
  padding: 0 10px 0 0;

  font-size: 15px;
  // @media ${(props) => props.theme.mobile} {
  //   font-size: 13px;
  // }
`;

const MainLeft = () => {
  return (
    <MainLeftWrapper>
      <MainLeftWeather />
      <MainLeftPlace />
      <MainLeftOffer />
    </MainLeftWrapper>
  );
};

export default MainLeft;
