import styled from "styled-components";

const KakaoMapSearch = () => {
    
    return (
        <KakaoMapSearchComponent placeholder="내 주변 식물가게로 검색해보세요."/>
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