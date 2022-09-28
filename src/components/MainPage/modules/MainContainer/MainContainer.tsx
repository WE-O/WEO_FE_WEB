import styled from "styled-components";
import { MainLeft } from "./MainLeft";
import { MainRight } from "./MainRight";

const MainWrapper = styled.div`
  display: flex;
  width: 98%;
  margin: 0 auto;

  height: 500px;
  @media ${(props) => props.theme.mobile} {
    height: 300px;
  }
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <MainLeft />
      <MainRight />
    </MainWrapper>
  );
};

export default MainContainer;
