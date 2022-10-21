import { useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import axios from "axios";
import MyPageContainer from "../../components/MyPage"
import styled from "styled-components";

const MyPage = () => {
    return (
        <MyPageWrapper>
            <MyPageContainer />
        </MyPageWrapper>
    );
};

export default MyPage;


const MyPageWrapper = styled.div`
    background:#F7F7F7;
`;