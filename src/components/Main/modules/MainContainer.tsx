import styled from "styled-components";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const MainWrapper = styled.div`
  // display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 50vh;
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
