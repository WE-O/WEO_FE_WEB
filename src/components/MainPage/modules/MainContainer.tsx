import styled from "styled-components";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const MainWrapper = styled.div`
  display: flex;
  width: 98%;
  height: 525px;
  margin: 0 auto;
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
