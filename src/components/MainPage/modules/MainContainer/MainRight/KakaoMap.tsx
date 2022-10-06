import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import KakaoMapSearch from "./KakaoMapSearch";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const KakaoMapRef = useRef(null);
  let [Lat, setLat] = useState(null);
  let [Lng, setLng] = useState(null);

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      let latitude = "33.450701";
      let longitude = "126.570667";
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // 지도 클릭 시 위도/경도 받아와서 setState
        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            const latlng = mouseEvent.latLng;
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
            console.log("위도 =", latlng.getLat(), "경도 =", latlng.getLng());
          }
        );

        window.kakao.maps.event.addListener(map, 'dragend', function () {
          // 지도 중심좌표를 얻어옵니다 
          let latlng = map.getCenter();
          console.log("위도 =", latlng.getLat(), "경도 =", latlng.getLng());
        });



      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);


  return (
    <>
      <KakaoMapSearchWrapper>
        <KakaoMapSearch/>
      </KakaoMapSearchWrapper>

      <KakaoMapWrapper id="map" ref={KakaoMapRef} />
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

const KakaoMapWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
