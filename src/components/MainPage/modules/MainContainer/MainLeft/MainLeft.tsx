import styled from "styled-components";
import {
  MainLeftDefaultTop,
  MainLeftDefaultMid,
  MainLeftDefaultBot,
} from "./index";

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
      <MainLeftDefaultTop />
      <MainLeftDefaultMid />
      <MainLeftDefaultBot />
    </MainLeftWrapper>
  );
};

export default MainLeft;
