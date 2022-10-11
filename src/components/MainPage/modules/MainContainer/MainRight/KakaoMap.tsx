import { useEffect, useRef, useState } from "react";
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



  useEffect(() => {
    if (!map) return
    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        debugger
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds()
        let markers = []


        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          })
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(markers)

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds)
      }
    }, {
      page:1
    })
  }, [keyword])



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
