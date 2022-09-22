import { useEffect, useState } from "react";
import { REST_API_KEY, REDIRECT_URI } from "../../storage";
import KakaoMap from "../components/KakaoMap";
const Maptest = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {}, []);

  return (
    <div>
      <div style={{ background: "#fff700d1" }}>
        <p style={{ textAlign: "center" }}>카카오 맵 테스트 화면</p>
      </div>

      <div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            zIndex: "100",
            textAlign: "center",
          }}
        >
          <input placeholder="테스트" />
        </div>
        <KakaoMap />
      </div>
    </div>
  );
};
export default Maptest;
