import Image from "next/image";
import styled from "styled-components";
import footerImg from "../../../../utils/images/footer_frame.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerItemWrapper>
        <BannerItemHeader>반려 식물, 같이 키워 보실래요?</BannerItemHeader>
        <BannerItemContent>식물집사가 되는 가장 쉬운 방법!</BannerItemContent>
        <BannerItemBtn>
          <button>무료 매거진 바로가기</button>
        </BannerItemBtn>
      </BannerItemWrapper>

      <Image
        src={footerImg}
        alt=""
        // placeholder="blur"
      />
    </BannerWrapper>
  );
};

export default Banner;

const BannerItemWrapper = styled.div`
  position: absolute;
  color: white;
  z-index: 1;
  text-align: center;
`;
const BannerItemHeader = styled.div`
  margin-bottom: 10px;
`;
const BannerItemContent = styled.div`
  margin-bottom: 25px;
  font-size: 25px;
  font-weight: 700;
`;
const BannerItemBtn = styled.div`
  button {
    padding: 7px 15px;
    font-size: 14px;
    background: none;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }
`;
const BannerWrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 20px auto;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
