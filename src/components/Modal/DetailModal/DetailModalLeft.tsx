import styled from "styled-components";

const DetailModalLeft = () => {
  return (
    <DetailModalLeftWrapper>
      <DetailModalLeftInfo>상세 정보</DetailModalLeftInfo>

      {/* 주소 (도로명 주소 / 지번 주소 / 우편 번호) 
      영업중 여부 | 영업시간 정보 
      URL
      연락처 
      배달 가능여부 */}
    </DetailModalLeftWrapper>
  );
};

export default DetailModalLeft;

const DetailModalLeftWrapper = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px 0px 30px;
  color: black;
`;

const DetailModalLeftInfo = styled.div`
  text-align: left;
  color: black;
`;
