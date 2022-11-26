import styled from 'styled-components';
import { forwardRef, useImperativeHandle, useState, useEffect, useCallback } from 'react';

interface Props{
  ref : any
  keyWordList: { [key: string]: string }
}

const ReviewContent = forwardRef((props:Props, ref) => {
  const [clickedArr, setClickedArr] = useState<string[]>([]);

  useImperativeHandle(ref, ()=>({
    getKeyword: clickedArr
  }))

  const clickedFunc = useCallback((item: string): void => {
    setClickedArr((prev) => {
      if (prev.includes(item)) {
        prev.splice(prev.indexOf(item), 1);
      } else {
        prev.push(item);
        if (prev.length >= 4) {
          prev.shift();
        }
      }
      return [...prev];
    });
  }, []);

  return (
    <ReviewContentWrapper>
      <AlertSpan1>
        이 장소에 어울리는 키워드를 최소 1개이상 골라주세요.
      </AlertSpan1>
      <AlertSpan2>키워드는 최대 3개까지 선택할 수 있습니다.</AlertSpan2>
      <ReviewContentUlWrapper>
        <ReviewContentUl>
          {Object.keys(props.keyWordList).map((item, idx) => {
            return (
              <ReviewContenLi
                key={`${item}_${idx}`}
                onClick={() => {
                  clickedFunc(item);
                }}
                checked={clickedArr.includes(item)}
              >
                {props.keyWordList[`${item}`]}
              </ReviewContenLi>
            );
          })}
        </ReviewContentUl>
      </ReviewContentUlWrapper>
    </ReviewContentWrapper>
  );
});

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  overflow: hidden;
`;

const AlertSpan1 = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

const AlertSpan2 = styled.span`
  font-size: 15px;
  color: gray;
`;

const ReviewContentUlWrapper = styled.div`
  width: 650px;
  height: 180px;
  border: none;
  margin: 10px;
`;

const ReviewContentUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ReviewContenLi = styled.li<{ checked: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: ${(Props) => (Props.checked ? 'white' : 'gray')};

  height: 30px;
  cursor: pointer;
  background-color: ${(Props) => Props.checked && Props.theme.primaryGreen};

  list-style-type: none;
  float: left;
  width: 200px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: ${(props) => `1px solid ${props.theme.primaryGreen}`};
  padding: 10px;
  margin: 7px;
`;
