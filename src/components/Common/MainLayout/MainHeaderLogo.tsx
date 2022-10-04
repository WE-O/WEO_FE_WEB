import styled from "styled-components";
import logoImg from "../../../utils/images/logo_horizontal.png";
import Image from "next/image";

const HeaderLogoWrapper = styled.div`
  height: 25px;
`;

const HeaderLogoItem = styled.div`
  width: 120px;
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
