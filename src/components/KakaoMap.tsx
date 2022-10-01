import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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
                const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);

                // 지도 클릭 시 위도/경도 받아와서 setState
                window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: { latLng: any; }) {
                    // 클릭한 위도, 경도 정보를 가져옵니다
                    const latlng = mouseEvent.latLng;
                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);
                    let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
                    message += '경도는 ' + latlng.getLng() + ' 입니다';
                    console.log(message);
                });
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return (
        <>
            <KakaoMapSearchWrapper>
                <KakaoMapSearch placeholder="주인공 넙ㅐㅐㅐ 대 " />
            </KakaoMapSearchWrapper>

            <KakaoMapWrapper id="map" ref={KakaoMapRef} />
        </>

    )
}
export default KakaoMap;


const KakaoMapSearchWrapper = styled.div`
    margin-top:15px;
    z-index:10;
    position:absolute;
    width:34%;
    left:50%;

`
const KakaoMapSearch = styled.input`
  font-size:25px
`;

const KakaoMapWrapper = styled.div`
width:100%;
height:100%;
`;

