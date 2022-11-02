import styled from 'styled-components';
import ReviewModalHeader from './ReviewModalHeader';
import ReviewContent from './ReviewContent';
import ReviewWrite from './ReviewWrite';

const ReviewModal = () => {
  return (
    <ReviewModalWrapper>
      <ReviewModalHeader />
      <ReviewContent />
      {/* <ReviewWrite /> */}
    </ReviewModalWrapper>
  );
};

export default ReviewModal;

const ReviewModalWrapper = styled.div`
  width: 800px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
`;
