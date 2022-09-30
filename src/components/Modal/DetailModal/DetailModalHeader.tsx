import styled from "styled-components";

const DetailModalHeader = () => {
  return (
    <DetailModalHeaderWrapper>
      <p style={{ fontSize: "20px" }}>상호명</p>
      <p style={{ fontSize: "15px" }}>업종 조회수 리뷰수</p>
    </DetailModalHeaderWrapper>
  );
};

export default DetailModalHeader;

const DetailModalHeaderWrapper = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 0px 30px;
  color: black;
`;
