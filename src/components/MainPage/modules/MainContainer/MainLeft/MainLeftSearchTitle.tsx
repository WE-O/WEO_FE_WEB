import { useState } from "react";
import styled from "styled-components";
import { SelectBox } from "../../../../Common/SelectBox";
import { CheckBox } from "../../../../Common/CheckBox";

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
          onHandleSelectChange={(select) => setSelectValue(select)}
        />
        <CheckBoxWrapper>
          <CheckBox
            onHandleSelectChange={() => {
              // 영업중인 장소만 보기 이벤트
            }}
          />
          <span>영업중인 장소만 보기</span>
        </CheckBoxWrapper>
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
  align-items: center;
  padding: 40px 5px;
`;

const CheckBoxWrapper = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
  }
`;
