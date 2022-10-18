import axios from "axios";
import Image from "next/image";
import { KeyboardEvent, useCallback, useState } from "react";
import styled from "styled-components";
import { call } from "../../../../../api/apis";
import { useAppDispatch } from "../../../../../store/hooks";
import { changeSearchKeyword } from "../../../../../store/modules/SearchKeywordSlice";
import { search_icon } from "../../../../../utils/images";

/*
이 부분들 수정하면 좋을듯요?

  1. const [value, setValue] = useState(""); => 인풋값 state로 관리하면 keywordChange 탈때마다 렌더링탐 다른 방법으로 체크하면 렌더링안탐
  => 굳이 이 컴포넌트를 계속 렌더링할 필요가 있는지?
  => 사용자가 검색할 때 인풋값 들고오면 될꺼같은대요?

  2. handleOnSearch => 엔터 키 체크 onKeyDown 으로 체크하지 않고 다른방법으로 간단하게 가능함
  => 인풋테그를 다른테그(찾아서 공부)로 감싸서 사용하면 됨 (이렇게 처리하는 걸 권장하는듯)
  => <Form submit => > 새창 열리면 norerefer noopnerer ? -> 보안 때문에  _target_ 


  3. KakaoMapSearchComponent 부분 value, onKeyDown 불필요
  => 1,2번 수정하면 value, onKeyDown 불필요
  => 사실상 onChange도 키워드 자동완성 기능 없으면 불필요

  4. 함수 선언 시 메모제이션 추가하기
  => 나중에 하려니까 귀찮; 개발하면서 추가해야 좋은듯요

*/

const KakaoMapSearch = () => {

  const dispatch = useAppDispatch();


  // 추후 클릭이벤트 달아주기
  const handleOnSearch = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(changeSearchKeyword(e.currentTarget.value));
    }
  },[]);


  return (
    <div>
      <KakaoMapSearchComponent
        placeholder="내 주변 식물가게로 검색해보세요. (예시 : 성수동 꽃집)"
        onKeyDown={(e) => handleOnSearch(e)}

      />

      {/* <Image
        src={search_icon}
      /> */}


    </div>


  );
};

export default KakaoMapSearch;

const KakaoMapSearchComponent = styled.input`
  border-radius: 26px;
  width: 530px;
  height: 45px;
  font-size: 18px;
  padding: 10px 40px;
  border: 2px solid #22cc88;
  ::-webkit-input-placeholder {
    text-align: left;
  }
`;
