import styled from "styled-components";
import MainHeaderItems from "./MainHeaderItems";

const MainHeaderWrapper = styled.div`
  height: 100px;
  width: 1200px;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media ${(props) => props.theme.mobile} {
    height: 60px;
    font-size: 13px;
  }
`;

const MainHeader = () => {
  return (
    <MainHeaderWrapper>
      <MainHeaderItems />
    </MainHeaderWrapper>
  );
};

export default MainHeader;
