import { useEffect, useState } from "react";
import { EasyAuth, KakaoMap } from "../components";

const SignUp = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => { 
        
    },[])

    return (
        <div>
            {/* <div> 회원가입 </div> */}
            {/* <div>123</div> */}
            <EasyAuth />
            {/* <KakaoMap /> */}
        </div>
    )
}
export default SignUp;