import styled from "styled-components";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderTab from "./MainHeaderTab";
// import MainHeaderBtn from "./MainHeaderBtn";

const HeaderItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
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
