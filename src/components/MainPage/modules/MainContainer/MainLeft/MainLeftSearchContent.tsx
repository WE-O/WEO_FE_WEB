import styled from 'styled-components';
import MainLeftSearchContentItem from './MainLeftSearchContentItem';

const MainLeftSearchContent = () => {
  return (
    <MainLeftSearchContentWrapper>
      <MainLeftSearchContentItemWrapper>
        <MainLeftSearchContentItem />
      </MainLeftSearchContentItemWrapper>
    </MainLeftSearchContentWrapper>
  );
};

export default MainLeftSearchContent;

const MainLeftSearchContentWrapper = styled.div`
  width: 100%;
  // height: 560px;
  height: 680px;
  overflow: scroll;
`;

const MainLeftSearchContentItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: 25px;
  flex-direction: column;
  position: relative;
`;
