import styled from "styled-components";

const Banner = () => {
  return (
    <BannerWrapper>
      {/* 임시 */}
      <div
        style={{
          background: "lightblue",
          height: "100%",
        }}
      ></div>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  width: 1200px;
  margin: 20px auto;
  height: 200px;
`;
