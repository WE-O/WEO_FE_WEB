import styled, { css } from 'styled-components';

const ReviewModalHeader = () => {
  return (
    <ReviewModalHeaderWrapper>
      <HeaderBtn btnType="cancle">취소</HeaderBtn>
      <HeaderText>
        상호명
        <HeaderTextSub>업종</HeaderTextSub>
      </HeaderText>
      <HeaderBtn btnType="ok">등록</HeaderBtn>
    </ReviewModalHeaderWrapper>
  );
};

export default ReviewModalHeader;

const ReviewModalHeaderWrapper = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 0;
`;

const HeaderBtn = styled.button<{ btnType: string }>`
  color: ${(Props) => (Props.btnType === 'cancle' ? 'black' : 'blue')};
  background-color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
`;

const HeaderText = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  font-weight: 600;
  gap: 10px;
`;

const HeaderTextSub = styled.span`
  font-size: 15px;
  color: gray;
`;
