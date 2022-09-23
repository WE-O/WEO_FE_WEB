import styled from "styled-components";
import {
  MainLeftDefaultTop,
  MainLeftDefaultMid,
  MainLeftDefaultBot,
} from "./MainLeftDefault";

const MainLeftWrapper = styled.div`
  width: 25%;
  padding: 20px;
`;

const MainLeft = () => {
  return (
    <MainLeftWrapper>
      <MainLeftDefaultTop />
      <MainLeftDefaultMid />
      <MainLeftDefaultBot />
    </MainLeftWrapper>
  );
};

export default MainLeft;
