import Image from "next/image";
import styled from "styled-components";
import { logoHorizontal } from "../../../utils/images";

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
          <Image src={logoHorizontal} alt="" />
        </HeaderLogoItem>
      </HeaderLogoWrapper>
    </>
  );
};

export default MainHeaderLogo;
