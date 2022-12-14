import styled from 'styled-components';
import {
  MainLeftWeather,
  MainLeftPlace,
  MainLeftOffer,
  MainLeftSearchTitle,
  MainLeftSearchContent,
} from './index';
import { useAppSelector } from '../../../../../store/hooks';

const MainLeftWrapper = styled.div`
  width: 400px;
  height: 700px;
  padding: 0 10px 0 0;

  font-size: 15px;
  // @media ${(props) => props.theme.mobile} {
  //   font-size: 13px;
  // }
`;

const MainLeft = () => {
  const searchData = useAppSelector((state) => state.map.searchData);

  return (
    <MainLeftWrapper>
      {searchData.length > 0 ? (
        <>
          {/* 검색영역 */}
          {/* <MainLeftSearchTitle /> */}
          <MainLeftSearchContent />
        </>
      ) : (
        <>
          {/* 기본영역 */}
          <MainLeftWeather />
          <MainLeftPlace />
          <MainLeftOffer />
        </>
      )}
    </MainLeftWrapper>
  );
};

export default MainLeft;
