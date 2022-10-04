import Link from "next/link";
import styled from "styled-components";

const DetailModalHeader = () => {
  return (
    <DetailModalHeaderWrapper>
      <p style={{ fontSize: "20px" }}>상호명</p>
      <p style={{ fontSize: "15px" }}>업종 조회수 리뷰수</p>
      <DetailModalHeaderLink>
        <Link href={"/"}>
          <DetailModalHeaderLinkItem>후기 작성하기</DetailModalHeaderLinkItem>
        </Link>
        <Link href={"/"}>
          <DetailModalHeaderLinkItem>정보 수정 요청</DetailModalHeaderLinkItem>
        </Link>
      </DetailModalHeaderLink>
    </DetailModalHeaderWrapper>
  );
};

export default DetailModalHeader;

const DetailModalHeaderWrapper = styled.div`
  position: relative;
  text-align: center;
  text-decoration: none;
  padding: 0px 30px;
  color: black;
`;

const DetailModalHeaderLink = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const DetailModalHeaderLinkItem = styled.a`
  text-decoration: underline;
  margin: 10px;
  color: black;
`;
