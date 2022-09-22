import styled from "styled-components";
import MainHeaderItems from "./MainHeaderItems";

const MainHeaderCss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 112px;
  gap: 80px;

  width: 100%;
  height: 72px;

  background: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const MainHeader = () => {
  return (
    <MainHeaderCss>
      <MainHeaderItems />
    </MainHeaderCss>
  );
};

export default MainHeader;
