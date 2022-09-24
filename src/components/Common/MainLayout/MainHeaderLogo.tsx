import styled from "styled-components";

const HeaderLogoWrapper = styled.div`
  height: 25px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const HeaderLogoItem = styled.div`
  position: absolute;
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
