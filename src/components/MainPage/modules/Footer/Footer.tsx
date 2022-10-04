import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      {/* 임시 */}
      <div
        style={{
          background: "lightsalmon",
          height: "100%",
        }}
      ></div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 150px;
  margin: 20px auto;
`;
