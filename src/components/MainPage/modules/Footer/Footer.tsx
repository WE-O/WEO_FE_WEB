import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItemTopWrapper>
        <FooterItems>이용약관</FooterItems>
        <FooterItems>개인정보처리방침</FooterItems>
        <FooterItems>서비스문의</FooterItems>
      </FooterItemTopWrapper>

      <FooterItemBotWrapper>
        <FooterItems>
          © Copyright 2022 SicsicMulmul Inc. All Rights Reserved.
        </FooterItems>
      </FooterItemBotWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 150px;
  background: ${(props) => props.theme.lightBackground3};
`;

const FooterItemTopWrapper = styled.div`
    width: 300px;
    height: 40%;
    gap: 20px;
    display: flex;
    margin: 10px auto;
    align-items: flex-end;
}`;
const FooterItemBotWrapper = styled.div`
    text-align: center;
}`;
const FooterItems = styled.div`
  color: ${(props) => props.theme.lightGrey2};
`;
