import styled from "styled-components";
import { MainLeftWeather, MainLeftPlace, MainLeftOffer } from "./index";

const MainLeftWrapper = styled.div`
  width: 25%;
  padding: 20px;

  font-size: 15px;
  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
  }
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
