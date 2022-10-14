import styled, { css } from 'styled-components';

const ReviewInfo = () => {
  return (
    <ReviewEmpty>
      <span>후기가 없어요, 후기를 제일 처음으로 작성 해볼까요?</span>
      <button>후기 작성하기</button>
    </ReviewEmpty>
  );
};

export default ReviewInfo;

const ReviewEmpty = styled.div`
  height: 300px;
  display: grid;
  justify-items: center;
  align-content: space-evenly;

  span {
    font-size: 32px;
    color: ${(props) => props.theme.grey1};
  }

  button {
    width: 120px;
    height: 40px;
    border: ${(props) => `1px solid ${props.theme.primaryGreen}`};
    color: ${(props) => props.theme.primaryGreen};
    background: white;
    cursor: pointer;
  }
`;
