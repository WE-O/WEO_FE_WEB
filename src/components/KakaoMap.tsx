import { useEffect, useRef } from "react";


const KakaoMap = () => {

    const KakaoMapRef = useRef(null);
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
    const JS_API_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_API_KEY;
    const ADMIN_KEY = process.env.NEXT_PUBLIC_KAKAO_ADMIN_KEY;
    const CALLBACK = process.env.NEXT_PUBLIC_CALLBACK_URL;

    useEffect(() => {
        const kakao = (window as any).kakao;
        const onLoadKakaoMap = () => {
            kakao.maps.load(() => {
                // 지도 생성
                const mapContainer = document.getElementById('map'), // 지도를 표시할 div  
                    mapOption = { 
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                        level: 3        // 지도의 확대 레벨
                    };

                const map = new kakao.maps.Map(mapContainer, mapOption)
                const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);
                
                // 결과값을 마커로 표시
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });
                
                // 지도의 중심을 결과값으로 받은 위치로 이동
                marker.setMap(map);
            });
        };
        onLoadKakaoMap();
    }, []);


    return (
        <div
            id="map"
            style={{ width: "100%", height: "100%" }}
            ref={KakaoMapRef}
        />
    )
}

export default KakaoMap;