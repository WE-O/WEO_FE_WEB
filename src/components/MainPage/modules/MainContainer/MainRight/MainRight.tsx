import styled from "styled-components";
import KakaoMap from "../../../../KakaoMap";

const MainRightWrapper = styled.div`
  width: 75%;
`;

const MainRight = () => {
  return (
    <MainRightWrapper>
      <KakaoMap />
    </MainRightWrapper>
  );
};

export default MainRight;
