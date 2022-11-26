import { SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import KakaoMapSearch from './KakaoMapSearch';
import { Map, MapMarker, useInjectKakaoMapApi } from 'react-kakao-maps-sdk';
import { searchData } from '../../../../../types/types';
import { active_picker } from "../../../../../utils/images";
import { addModal } from '../../../../../store/modules/ModalSlice';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const KakaoMapRef = useRef(null);
  const keyword = useAppSelector((state) => state.searchKey.searchKeyword);
  const userLat = useAppSelector((state) => state.user.lat);
  const userLng = useAppSelector((state) => state.user.lng);

  const dispatch = useAppDispatch();

  const [info, setInfo] = useState<any>();
  const [markers, setMarkers] = useState<any[]>([]);
  const [map, setMap] = useState<any>();
  const [isSearch, setIsSearch] = useState<Boolean>(false);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();
    const mark: SetStateAction<any[]> = [];
    const center = map.getCenter();

    let newData: searchData[] = [];

    ps.keywordSearch(
      keyword,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();

          if (_pagination.hasNextPage) {
            _pagination.nextPage();
          }

          for (let i = 0; i < data.length; i++) {
            if (
              (data[i].category_name && data[i].category_name.includes('꽃')) ||
              (data[i].category_name &&
                data[i].category_name.includes('시장') &&
                data[i].place_name.includes('꽃'))
            ) {
              // @ts-ignore
              mark.push({
                position: {
                  lat: data[i].y,
                  lng: data[i].x,
                },
                content: data[i].place_name,
                id:data[i].id
              });
              // @ts-ignore
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));

              newData.push({
                place_name: data[i].place_name, // 상가명
                category_name: data[i].category_name, // 카테고리
                address_name: data[i].address_name, // 주소
                road_address_name: data[i].road_address_name, // 도로명 주소
                phone: data[i].phone, // 전화번호
                searchCnt: 0, // 조회수
                reviewCnt: 0, // 리뷰수
                like: false, // 즐겨찾기 여부
              });
            }
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          if (_pagination.hasNextPage === false && mark.length > 0) {
            setTimeout(() => {
              // 카카오맵 자체 오류 방어를 위해 bounds에 강제적으로 하나 넣어주기
              bounds.extend(
                new kakao.maps.LatLng(
                  mark[0].position.lat,
                  mark[0].position.lng,
                ),
              );
              map.setBounds(bounds);
              setIsSearch(!isSearch);
              setMarkers(mark);

              // dispatch(setSearchData(newData));
            });
          }
        }
      },
      {
        location: center,
        // sort: kakao.maps.services.SortBy.DISTANCE,
      },
    );

    if (mark.length === 0) {
      //todo 이 부분 얼럿을 띄우든 토스트를 띄우든 해야한다.
      console.log('검색 결과가 없습니다.');
      // dispatch(setSearchData([]));
    }
  }, [keyword]);

  useEffect(() => {
    setMarkers(markers);
  }, [isSearch]);

  return (
    <>
      <KakaoMapSearchWrapper>
        <KakaoMapSearch />
      </KakaoMapSearchWrapper>

      <KakaoMapWrapper // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: userLat,
          lng: userLng,
        }}
        ref={KakaoMapRef}
        onCreate={setMap}
        level={3} // 지도의 확대 레벨
        maxLevel={5}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            // Todo 정인님 요기 부분 이벤트 태워주셔야됩니다!
            onClick={() => {
              dispatch(
                addModal({
                  modalNm: 'detailModal',
                  modalParam: { selectId: marker.id},
                }),
              )
            }}
            image={{
              src: active_picker?.src,
              size: {
                width: 64,
                height: 69,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          >

            {/* 마커 클릭이벤트 제거 */}
            {/* {info && info.content === marker.content && (
              <Picker>{marker.content}</Picker>
            )} */}
          </MapMarker>
        ))}
      </KakaoMapWrapper>
    </>
  );
};
export default KakaoMap;

const KakaoMapSearchWrapper = styled.div`
  margin-top: 15px;
  z-index: 10;
  position: absolute;
  width: 100%;
  text-align: center;
`;

const KakaoMapWrapper = styled(Map)`
  border: 1px solid lightgray;
  width: 100%;
  height: 100%;
`;

const Marker = styled.div`
  // background : red;
`
