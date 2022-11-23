import Link from "next/link";
import styled from "styled-components";

const RedirectMap = {
  "이용약관": "https://wandering-newsprint-a20.notion.site/22b9f1bd049446cdb177ecbabdeba4e2",
  "개인정보처리방침": "https://wandering-newsprint-a20.notion.site/627a2d8643f64219ba23cd9f533f72c3",
  "서비스문의" : ""
}

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItemTopWrapper>
        <FooterItems>
          <RedicrectText href={RedirectMap["이용약관"]} target="_blank">
            이용약관
          </RedicrectText>
        </FooterItems>
        <FooterItems>
          <RedicrectText href={RedirectMap["개인정보처리방침"]} target="_blank">
              개인정보처리방침
            </RedicrectText>
        </FooterItems>
        {/* <FooterItems>
          <RedicrectText href={RedirectMap["서비스문의"]} target="_blank">
            서비스 문의
          </RedicrectText>
        </FooterItems> */}
      </FooterItemTopWrapper>

      <FooterItemBotWrapper>
        <FooterItems id={"copyright"}>
          © Copyright 2022 SiksikMulmul Inc. All Rights Reserved.
        </FooterItems>
      </FooterItemBotWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const RedicrectText = styled.a`
  cursor : pointer;
  color: white;
  text-decoration: none;
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 150px;
  background: ${(props) => props.theme.darkGrey2};
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

    #copyright{
    font-style: italic;  
    }
}`;
const FooterItems = styled.div`
  color: ${(props) => props.theme.planGrey};
  
`;
