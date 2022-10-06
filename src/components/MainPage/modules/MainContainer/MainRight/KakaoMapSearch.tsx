import axios from "axios";
import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { call } from "../../../../../api/apis";

/*
이 부분들 수정하면 좋을듯요?

  1. const [value, setValue] = useState(""); => 인풋값 state로 관리하면 keywordChange 탈때마다 렌더링탐 다른 방법으로 체크하면 렌더링안탐
  => 굳이 이 컴포넌트를 계속 렌더링할 필요가 있는지?
  => 사용자가 검색할 때 인풋값 들고오면 될꺼같은대요?

  2. handleOnSearch => 엔터 키 체크 onKeyDown 으로 체크하지 않고 다른방법으로 간단하게 가능함
  => 인풋테그를 다른테그(찾아서 공부)로 감싸서 사용하면 됨 (이렇게 처리하는 걸 권장하는듯)

  3. KakaoMapSearchComponent 부분 value, onKeyDown 불필요
  => 1,2번 수정하면 value, onKeyDown 불필요

  4. 함수 선언 시 메모제이션 추가하기
  => 나중에 하려니까 귀찮; 개발하면서 추가해야 좋은듯요

*/

const KakaoMapSearch = () => {
  const [value, setValue] = useState("");

  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 추후 클릭이벤트 달아주기
  const handleOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      callSearchAPI(value);
    }
  };

  // 카카오 키워드 검색 오픈 API
  const callSearchAPI = async (value: string) => {
    let searchUrl =
      "https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&query=국밥";

    await axios
      .get(searchUrl, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
        },
        // params: {
        //   accessToken: accessToken,
        //   expiresIn: expires_in
        // },
        withCredentials: true,
      })
      .then(() => {
        debugger;
      });
  };

  return (
    <KakaoMapSearchComponent
      placeholder="내 주변 식물가게로 검색해보세요."
      value={value}
      onChange={(e) => keywordChange(e)}
      onKeyDown={(e) => handleOnSearch(e)}
    />
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
