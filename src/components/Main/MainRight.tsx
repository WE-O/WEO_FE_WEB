import styled from "styled-components";
import KakaoMap from "../../components/KakaoMap";

const MainRightWrapper = styled.div`
  -webkit-flex: 1;
  flex: 1;
`;

const MainRight = () => {
  return (
    <MainRightWrapper>
      <KakaoMap />
    </MainRightWrapper>
  );
};

export default MainRight;
