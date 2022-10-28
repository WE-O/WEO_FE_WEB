import Image from "next/image";
import Link from "next/link";
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
          <Link href="/">
            <Image src={logoHorizontal} alt="" />
          </Link>
        </HeaderLogoItem>
      </HeaderLogoWrapper>
    </>
  );
};

export default MainHeaderLogo;
