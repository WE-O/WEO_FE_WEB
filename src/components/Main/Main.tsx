import styled from "styled-components";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const MainWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
`;

const Main = () => {
  return (
    <MainWrapper>
      <MainLeft></MainLeft>
      <MainRight></MainRight>
    </MainWrapper>
  );
};

export default Main;
