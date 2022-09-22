import React, { useEffect, useState } from "react";



const KakaoMap = () => {

    let [kakaoMap, setKakaoMap] = useState(null);

    useEffect(() => {
        const { kakao } = window;
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        setKakaoMap(map);
    }, []);


    return (
        <div id="map" style={{ width: "800px", height: "500px" }} />
    )
}

export default KakaoMap;




