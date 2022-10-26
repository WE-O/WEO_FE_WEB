import styled from 'styled-components';
// import NaverMap from "../../../../NaverMap";
import KakaoMap from './KakaoMap';

const MainRightWrapper = styled.div`
  width: 800px;
  position: relative;
`;

const MainRight = () => {
  return (
    <MainRightWrapper>
      {/* <NaverMap /> */}
      <KakaoMap />
    </MainRightWrapper>
  );
};

export default MainRight;
