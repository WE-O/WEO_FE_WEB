import { useEffect, useState } from "react"

type AppProps = {
    name: string
}

const NaverRedirect: React.FC<AppProps> = (props) => {

    const NAVER_Client_ID: String = "HrncQLotFM9Or9LgmUjG";
    const NAVER_Client_Secret: String = "Vzg4KYhZUF";

    console.log(NAVER_Client_ID);
    console.log(NAVER_Client_Secret);

    const UserProfile = () => {
        location.href.includes('access_token') && getUser();
    };
    const getUser = () => {
        const token = window.location.href.split('=')[1].split('&')[0];
        console.log(token);
    };
    useEffect(UserProfile, []);

    return (
        <div>
            NaverRedirect!
        </div>
    )
}

export default NaverRedirect;