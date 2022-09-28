import styled from "styled-components";
import KakaoMap from "../../KakaoMap";
import NaverMap from "../../NaverMap";

const MainRightWrapper = styled.div`
  width: 75%;
`;

const MainRight = () => {
  return (
    <MainRightWrapper>
      <NaverMap />
    </MainRightWrapper>
  );
};

export default MainRight;
