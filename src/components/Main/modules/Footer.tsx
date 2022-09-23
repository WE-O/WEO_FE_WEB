import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 15vh;
  padding: 15px;
`;

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
