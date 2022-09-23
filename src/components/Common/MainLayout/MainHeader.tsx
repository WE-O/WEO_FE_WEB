import styled from "styled-components";
import MainHeaderItems from "./MainHeaderItems";

const MainHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 112px;
  gap: 80px;

  width: 100%;
  height: 10vh;

  background: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <MainHeaderItems />
    </MainHeaderWrapper>
  );
};

export default MainHeader;
