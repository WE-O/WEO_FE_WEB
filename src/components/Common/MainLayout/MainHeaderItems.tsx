import styled from "styled-components";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderTab from "./MainHeaderTab";
// import MainHeaderBtn from "./MainHeaderBtn";

const HeaderItemWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  align-items: center;
`;

// const LogoItems;

const MainHeaderItems = () => {
  return (
    <>
      <HeaderItemWrapper>
        <MainHeaderLogo />
        <MainHeaderTab />
      </HeaderItemWrapper>
    </>
  );
};

export default MainHeaderItems;
