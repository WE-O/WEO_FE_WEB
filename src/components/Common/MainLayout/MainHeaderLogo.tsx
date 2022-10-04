import Image from "next/image";
import styled from "styled-components";
import logoImg from "../../../utils/images/logo_horizontal.png";

const HeaderLogoWrapper = styled.div``;

const HeaderLogoItem = styled.div`
  width: 150px;
  height: 50px;
  cursor: pointer;
`;

const MainHeaderLogo = () => {
  return (
    <>
      <HeaderLogoWrapper>
        <HeaderLogoItem>
          <Image
            src={logoImg}
            alt=""
            // placeholder="blur"
          />
        </HeaderLogoItem>
      </HeaderLogoWrapper>
    </>
  );
};

export default MainHeaderLogo;
