import styled from 'styled-components';
import { forwardRef, useImperativeHandle} from 'react';

interface Props{
  ref : any
}

const ReviewContent = forwardRef((props:Props, ref) => {

  useImperativeHandle(ref, ()=>({
    getContent: (document.getElementById('ReviewWriteWrapper') as HTMLInputElement)?.value
  }))

  return (
    <ReviewContentWrapper>
      <ReviewWriteWrapper
        id='ReviewWriteWrapper'
        placeholder="(선택) 장소에 방문한 식물집사님의 경험을 공유해주세요."
        maxLength={100}
        onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          document.getElementById('count').innerHTML = `${
            (e.target as HTMLInputElement).value.length
          } / 100 자`;
        }}
      />
      <CountWrapper>
        <span id="count">0 / 100 자</span>
      </CountWrapper>
    </ReviewContentWrapper>
  );
});

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  width: 640px;
  margin-bottom: 10px;
`;

const ReviewWriteWrapper = styled.textarea`
  width: 100%;
  height: 200px;
  margin: auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: 16px;
  padding: 20px;
  resize: none;
`;

const CountWrapper = styled.div`
  position: relative;

  span {
    font-size: 16px;
    color: #6d7280;
    position: absolute;
    right: 15px;
    top: -30px;
  }
`;
