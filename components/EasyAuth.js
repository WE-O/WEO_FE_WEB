import { REST_API_KEY, REDIRECT_URI } from "../storage";

const EasyAuth = () => {

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY()}&redirect_uri=${REDIRECT_URI()}&response_type=code`;

    const onBtnClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div>
            간편인증
            <div>
                <button onClick={(e) => onBtnClick(e)}>카카오 로그인</button>
            </div>

        </div>
    )
}

export default EasyAuth;