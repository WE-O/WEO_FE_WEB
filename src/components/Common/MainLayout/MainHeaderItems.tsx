import styled from "styled-components";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderTab from "./MainHeaderTab";
// import MainHeaderBtn from "./MainHeaderBtn";

const HeaderItemWrapper = styled.div`
  display: grid;
  // grid-template-columns: 1fr 3fr 1fr;
  grid-template-columns: 1fr 4fr;
  position: relative;
  width: 100%;
`;

// const LogoItems;

const MainHeaderItems = () => {
  return (
    <>
      <HeaderItemWrapper>
        <MainHeaderLogo />
        <MainHeaderTab />
        {/* <MainHeaderBtn /> */}
      </HeaderItemWrapper>
    </>
  );
};

export default MainHeaderItems;
