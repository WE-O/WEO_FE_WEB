import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';

const ReviewContent = () => {
  return <div></div>;
};

export default ReviewContent;

const ReviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  span {
    font-size: 15px;
    color: gray;
  }
`;

// const ReviewWrite = () => {
//   return (
//     <ReviewWriteWrapper
//       placeholder="(선택) 장소에 방문한 식물집사님의 경험을 공유해주세요."
//       // placeholder="(선택) 장소에 방문한 식물집사님의 경험을 공유해주세요.&#13;&#10;구매한 식물의 사진과 이름, 가격을 알려주시면 다른 사용자에게 많은 도움이 됩니다.&#13;&#10;장소와 무관한 사진 및 욕설, 비속어가 포함된 리뷰는 고지 없이 삭제될 수 있습니다.&#13;&#10;"
//     ></ReviewWriteWrapper>
//   );
// };

// export default ReviewWrite;

// const ReviewWriteWrapper = styled.textarea`
//   width: 540px;
//   height: 250px;
//   margin: auto;
//   border: 1px solid black;
//   border-radius: 10px;
//   font-size: 15px;
//   padding: 20px;
//   resize: none;
// `;
