import axios from "axios";
import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { call } from "../../../../../api/apis";

const KakaoMapSearch = () => {

  const [value, setValue] = useState("");

  const keywordChange = (e: { preventDefault: () => void; target: { value: string }; }) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  // 추후 클릭이벤트 달아주기
  const handleOnSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      callSearchAPI(value)
    }
  }

  // 카카오 키워드 검색 오픈 API
  const callSearchAPI = async (value: string) => {
    let searchUrl = "https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&query=국밥"
    
    await axios.get(searchUrl, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
      },
      // params: {
      //   accessToken: accessToken,
      //   expiresIn: expires_in
      // },
      withCredentials: true
    }).then(()=>{debugger})
  }

  return (
    <KakaoMapSearchComponent
      placeholder="내 주변 식물가게로 검색해보세요."
      value={value}
      onChange={(e) => keywordChange(e)}
      onKeyDown={(e) => handleOnSearch(e)}
    />
  )
}

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