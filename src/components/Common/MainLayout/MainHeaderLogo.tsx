import styled from "styled-components";

const HeaderLogoWrapper = styled.div`
  height: 25px;
`;

const HeaderLogoItem = styled.div`
  width: 55.01px;
  height: 14.94px;
  left: 2.5px;
  top: 5px;
  cursor: pointer;
`;

const MainHeaderLogo = () => {
  return (
    <>
      <HeaderLogoWrapper>
        <HeaderLogoItem>LOGO</HeaderLogoItem>
      </HeaderLogoWrapper>
    </>
  );
};

export default MainHeaderLogo;
