import styled from "styled-components";
import { SelectBox } from "../../../../Common/SelectBox";

const OPTIONS = [
  { value: "전체", name: "전체(디자인 수정할 예정)" },
  { value: "셀렉트 테스트1", name: "셀렉트 테스트1" },
  { value: "셀렉트 테스트2", name: "셀렉트 테스트2" },
];

const MainLeftSearchTitle = () => {
  return (
    <>
      <MainLeftSearchTitleWrapper>
        {/* <SelectBox defaultValue={"전체"} options={OPTIONS} /> */}
      </MainLeftSearchTitleWrapper>
    </>
  );
};

export default MainLeftSearchTitle;

const MainLeftSearchTitleWrapper = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  width: 100%;
  height: 120px;
  margin: 0 0 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
