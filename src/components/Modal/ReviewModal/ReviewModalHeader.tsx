import styled, { css } from 'styled-components';

const ReviewModalHeader = () => {
  return (
    <ReviewModalHeaderWrapper>
      <HeaderWrapper>
        <HeaderText>상호명</HeaderText>
        <HeaderTextSub>업종</HeaderTextSub>
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

const HeaderBtn = styled.button<{ btnType: string }>`
  color: ${(Props) => (Props.btnType === 'cancle' ? 'black' : 'blue')};
  background-color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
`;
