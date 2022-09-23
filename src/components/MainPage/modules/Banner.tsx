import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 200px;
  padding: 15px;
`;

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
