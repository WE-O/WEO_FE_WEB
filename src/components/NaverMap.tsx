import { useEffect, useRef } from "react";

const NaverMap = () => {

    const naverMapRef = useRef(null);

    useEffect(() => {
        naverMapInit();
    })

    const naverMapInit = () => {
        const naver = (window as any).naver;
        const map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.5666805, 126.9784147), // 초기 값 
            zoom: 15, //지도의 초기 줌 레벨
            minZoom: 7, //지도의 최소 줌 레벨
            zoomControlOptions: { //줌 컨트롤의 옵션
                position: naver.maps.Position.TOP_RIGHT // 우측 확대/축소 컨트롤
            }
        });
        let marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(37.3595704, 127.105399),
            map: map
        });
        naver.maps.Event.addListener(map, 'click', function (e: any) {
            marker.setPosition(e.latlng);
        });
        
    }

    return (
        <div
            id="map"
            style={{ width: "100%", height: "100%" }}
            ref={naverMapRef}
        />
    )
}

export default NaverMap;