import styled from "styled-components";
import MainHeaderItems from "./MainHeaderItems";

const MainHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 95%;
  background: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;

  font-size: 15px;
  height: 100px;
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
