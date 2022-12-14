import styled, { css } from 'styled-components';

interface Props{
  placeName:string,
  categoryGroupName:string
}

const ReviewModalHeader = (props:Props) => {
  return (
    <ReviewModalHeaderWrapper>
      <HeaderWrapper>
        <HeaderText>{props.placeName}</HeaderText>
        <HeaderTextSub>{props.categoryGroupName}</HeaderTextSub>
      </HeaderWrapper>
    </ReviewModalHeaderWrapper>
  );
};

export default ReviewModalHeader;

const ReviewModalHeaderWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0 10px 0;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const HeaderText = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const HeaderTextSub = styled.span`
  font-size: 15px;
  color: gray;
`;
