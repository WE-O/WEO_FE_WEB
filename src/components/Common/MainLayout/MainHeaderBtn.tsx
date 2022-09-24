import styled from "styled-components";
import Button from "../Button";

const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  height: 26px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const MainHeaderBtn = () => {
  return (
    <MainHeaderWrapper>
      <Button>로그인</Button>
    </MainHeaderWrapper>
  );
};

export default MainHeaderBtn;
