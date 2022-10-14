import Link from 'next/link';
import styled, { css } from 'styled-components';

const DetailModalHeader = () => {
  return (
    <DetailModalHeaderWrapper>
      <HeaderSpan case="title">상호명</HeaderSpan>
      <HeaderSpan case="sub">원예, 화훼농원</HeaderSpan>
      <DetailModalHeaderLink>
        <DetailModalHeaderLinkItem>후기 작성하기</DetailModalHeaderLinkItem>
        <DetailModalHeaderLinkItem>정보 수정 요청</DetailModalHeaderLinkItem>
      </DetailModalHeaderLink>
    </DetailModalHeaderWrapper>
  );
};

export default DetailModalHeader;

const DetailModalHeaderWrapper = styled.div`
  position: relative;
  text-align: center;
  text-decoration: none;
  margin: 0px 0px 30px 0px;
`;

const DetailModalHeaderLink = styled.div`
  display: flex;
  top: 0px;
  gap: 20px;
  position: absolute;
  right: 0px;
`;

const DetailModalHeaderLinkItem = styled.button`
  width: 120px;
  height: 35px;
  color: ${(props) => props.theme.primaryGreen};
  border: ${(props) => `1px solid ${props.theme.primaryGreen}`};
  background: white;
  border-radius: 10px;
`;

const HeaderSpan = styled.span<{ case: string }>`
  ${(Props) =>
    Props.case === 'title' &&
    css`
      font-weight: 700;
      font-size: 32px;
      margin-right: 20px;
    `}

  ${(Props) =>
    Props.case === 'sub' &&
    css`
      font-size: 16px;
      color: ${(props) => props.theme.grey1};
    `}
`;
