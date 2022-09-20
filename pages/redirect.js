import { useEffect, useState } from "react";
import { REST_API_KEY, REDIRECT_URI } from "../storage";

const Redirect = () => {

    const [token, setToken] = useState(null);

    useEffect(() => {
        getKakaoToken();
    }, [])

    const getKakaoToken = () => {
        const KAKAO_AUTH_CODE = window.location.href.split("code=")[1];
        const KAKAO_GET_TOKEN_URI = `https://kauth.kakao.com/oauth/token`;
        console.log(KAKAO_AUTH_CODE);
        console.log(KAKAO_GET_TOKEN_URI);

        //? ----- SAMPLE -------
        // curl - v - X POST "https://kauth.kakao.com/oauth/token" \
        // -H "Content-Type: application/x-www-form-urlencoded" \
        // -d "grant_type=authorization_code" \
        // -d "client_id=${REST_API_KEY}" \
        // --data - urlencode "redirect_uri=${REDIRECT_URI}" \
        // -d "code=${AUTHORIZE_CODE}"
        //? --------------------

        fetch(KAKAO_GET_TOKEN_URI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `grant_type=authorization_code&client_id=${REST_API_KEY()}&redirect_uri=${REDIRECT_URI()}&code=${KAKAO_AUTH_CODE}`
        })
            .then(res => res.json())
            .then(data => {
                debugger
                console.log(data);
            })

    }


    return (
        <div>
            <div style={{ background: "coral" }}>
                <p style={{ textAlign: "center" }}>카카오 로그인 완료시 돌아올 화면</p>
            </div>

        </div>
    )
}
export default Redirect;