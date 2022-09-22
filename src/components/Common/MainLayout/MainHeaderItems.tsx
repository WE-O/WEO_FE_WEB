import styled from "styled-components";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderTab from "./MainHeaderTab";
import MainHeaderBtn from "./MainHeaderBtn";

const HeaderItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  position: relative;
  width: 100%;

  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // padding: 0px;
  // gap: 48px;

  // width: 544px;
  // height: 26px;

  // flex: none;
  // order: 0;
  // flex-grow: 0;
`;

// const LogoItems;

const MainHeaderItems = () => {
  return (
    <>
      <HeaderItemWrapper>
        <MainHeaderLogo />
        <MainHeaderTab />
        <MainHeaderBtn />
      </HeaderItemWrapper>
    </>
  );
};

export default MainHeaderItems;
