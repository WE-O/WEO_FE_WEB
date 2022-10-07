import { useState } from "react";
import styled from "styled-components";
import { SelectBox } from "../../../../Common/SelectBox";

const OPTIONS = [
  { key: "전체", value: "전체" },
  { key: "셀렉트 테스트1", value: "셀렉트 테스트1" },
  { key: "셀렉트 테스트2", value: "셀렉트 테스트2" },
  { key: "셀렉트 테스트3", value: "셀렉트 테스트3" },
  { key: "셀렉트 테스트4", value: "셀렉트 테스트4" },
  { key: "셀렉트 테스트5", value: "셀렉트 테스트5" },
];

const MainLeftSearchTitle = () => {
  const [selectValue, setSelectValue] = useState<string>("");

  return (
    <>
      <MainLeftSearchTitleWrapper>
        <SelectBox
          value={selectValue}
          defaultValue={"전체"}
          options={OPTIONS}
          onHandleSelectChange={(select) => setSelectValue((prev) => select)}
        />
        <div
          style={{
            position: "absolute",
            right: "10px",
          }}
        >
          영업중인 장소
        </div>
      </MainLeftSearchTitleWrapper>
    </>
  );
};

export default MainLeftSearchTitle;

const MainLeftSearchTitleWrapper = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  width: 100%;
  height: 120px;
  position: relative;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  padding: 40px 5px;
`;
