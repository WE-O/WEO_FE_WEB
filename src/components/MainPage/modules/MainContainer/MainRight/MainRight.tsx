import styled from "styled-components";
<<<<<<< HEAD:src/components/MainPage/modules/MainRight.tsx
import KakaoMap from "../../KakaoMap";
import NaverMap from "../../NaverMap";
=======
import KakaoMap from "../../../../KakaoMap";
>>>>>>> 384086181d83b46c71b0cd494c7edaef57f6c559:src/components/MainPage/modules/MainContainer/MainRight/MainRight.tsx

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
