import styled from "styled-components";

const DetailModal = () => {
  return (
    <DetailModalWrapper>
      <DetailModalHeader>
        <p style={{ fontSize: "20px" }}>상호명</p>
        <p style={{ fontSize: "15px" }}>업종 조회수 리뷰수</p>
      </DetailModalHeader>
      <div style={{ display: "flex" }}>
        <DetailContentLeft>Left</DetailContentLeft>
        <DetailContentRight>Right</DetailContentRight>
      </div>
    </DetailModalWrapper>
  );
};

export default DetailModal;

const DetailModalWrapper = styled.div`
  width: 80%;
  height: 70%;
  position: absolute;
  top: 100px;
  padding: 30px 30px;
  background-color: white;
  border-radius: 30px;
  color: black;
`;

const DetailModalHeader = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 0px 30px;
  color: black;
`;

const DetailContentLeft = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px 0px 30px;
  color: black;
`;

const DetailContentRight = styled.div`
  width: 50%;
  text-align: center;
  text-decoration: none;
  padding: 0px 30px 0px 0px;
  color: black;
`;
