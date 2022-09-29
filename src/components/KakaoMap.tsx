import { useEffect, useRef, useState } from "react";

// 카카오 REST API KEY          ==>    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
// 카카오 JavaScript API KEY    ==>    process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY;
// 카카오 Admin Key             ==>    process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY;
// 카카오 Callback URL          ==>    process.env.NEXT_PUBLIC_CALLBACK_URL;
const KakaoMap = () => {

    const KakaoMapRef = useRef(null);
    let [Lat, setLat] = useState(null);
    let [Lng, setLng] = useState(null);

    useEffect(() => {
        const kakao = (window as any).kakao;
        onLoadKakaoMap(kakao);
    }, []);

    const onLoadKakaoMap = (kakao: any) => {
        kakao.maps.load(() => {
            // 지도 생성
            const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3        // 지도의 확대 레벨
                };

            const map = new kakao.maps.Map(mapContainer, mapOption)
            const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

            // 결과값을 마커로 표시
            const marker = new kakao.maps.Marker({
                map: map,
                position: markerPosition,
            });

            // 지도의 중심을 결과값으로 받은 위치로 이동
            marker.setMap(map);

            // 지도 클릭 시 위도/경도 받아와서 setState
            kakao.maps.event.addListener(map, 'click', function (mouseEvent: { latLng: any; }) {

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



    return (
        <div
            id="map"
            style={{ width: "100%", height: "100%" }}
            ref={KakaoMapRef}
        />
    )
}

export default KakaoMap;