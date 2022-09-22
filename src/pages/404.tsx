import { useRouter } from 'next/router'
import React from 'react';

const Custom404 = () => {

    const Router = useRouter();
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        Router.push("http://localhost:3000/main");
    }

    return (
        <div>
            죄송합니다.<br />
            요청하신 페이지에 연결할 수 없습니다.<br />
            해당 웹페이지 주소가 변경되었거나, 일시적으로 사용하실 수 없습니다.<br />
            메인페이지로 이동 하시거나 잠시 후에 이용해 주시기바랍니다.<br />
            <button onClick={handleOnClick}> 메인으로 이동하는 버튼 </button>
        </div>
    );
};

export default Custom404;