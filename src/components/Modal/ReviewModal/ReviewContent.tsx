import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';

const ReviewContent = () => {
  return (
    <ReviewContentWrapper>
      <ReviewWriteWrapper
        maxLength={1000}
        onKeyUp={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
          document.getElementById('count').innerHTML = `${
            (e.target as HTMLInputElement).value.length
          } / 1000 자`;
        }}
      />
      <CountWrapper>
        <span id="count">0 / 1000 자</span>
      </CountWrapper>
    </ReviewContentWrapper>
  );
};

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  width: 650px;
  margin: auto;
`;

const ReviewWriteWrapper = styled.textarea`
  width: 100%;
  height: 235px;
  margin: auto;
  border: 1px solid black;
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
