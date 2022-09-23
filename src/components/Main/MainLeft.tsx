import styled from "styled-components";
import {
  MainLeftDefaultTop,
  MainLeftDefaultMid,
  MainLeftDefaultBot,
} from "./modules/MainLeftDefault";

const MainLeftWrapper = styled.div`
  width: 400px;
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
