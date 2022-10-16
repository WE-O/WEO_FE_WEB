import { SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { kakaoMap } from "../../../../../store/modules/MapSlice";
import KakaoMapSearch from "./KakaoMapSearch";
import { Map, MapMarker, useInjectKakaoMapApi } from "react-kakao-maps-sdk"

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

  const [info, setInfo] = useState<any>()
  const [markers, setMarkers] = useState<any[]>([])
  const [map, setMap] = useState<any>()
  const [isSearch, setIsSearch] = useState<Boolean>(false);



  useEffect(() => {
    if (!map) return

    const ps = new kakao.maps.services.Places();
    const mark: SetStateAction<any[]> = [];

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      debugger
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()

        if (_pagination.hasNextPage) { _pagination.nextPage() }

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          mark.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        if (_pagination.hasNextPage === false) {
          map.setBounds(bounds);
          setIsSearch(!isSearch);
          setMarkers(mark);
        }

      }
    },
      {
        // 여기에 지도 제한 둬야할 듯 뭔가 추가적인 정책이 필요하다.
        // size:45
      })


  }, [keyword])

  useEffect(() => {
    setMarkers(markers);
    debugger
  }, [isSearch])

  


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
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
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
  width: 100%;
  height: 100%;
`;
