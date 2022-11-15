import { useEffect } from "react";
import styled from "styled-components";
import { call } from "../../api/apis";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addModal } from "../../store/modules/ModalSlice";
import { SET_userInfo } from "../../store/modules/UserSlice";
import CommonModal from "../Modal/CommonModal/CommonModal";
import { LeftArea, RightArea } from "./Modules";

const MyPageContainer = () => {


    const dispatch = useAppDispatch();

    // const userData = useAppSelector((state) => { state.user.userData });
    
    // todo 서버사이드 렌더링 추후 추가하기
    useEffect(() => {
        // 마이페이지 정보 조회 
        // /api​/v1 / member / mypage / { memberId }
        if (localStorage.getItem("UserInfo")) {
            const memberID = JSON.parse(localStorage.getItem("UserInfo")).memberId;
            const param = {
                url: `${process.env.NEXT_PUBLIC_API_DOMAIN}api/v1/member/mypage/${memberID}`,
                data: {
                    memberId: memberID,
                }
            }

            const responseData = call("GET", param);
            responseData.then((resData) => {
                const userInfoActionPayload = {
                    email: resData.email,
                    nickname: resData.nickname,
                    profileImg: resData.profileImg,
                    snsType: resData.snsType,
                    bookmarkCnt: resData.bookmarkCnt,
                    reviewCnt: resData.reviewCnt,
                    reportCnt: resData.reportCnt,
                    scrapList: resData.scrapList,
                }
                dispatch(SET_userInfo(userInfoActionPayload));
            }).catch((error) => {
                console.log("에러발생! 에러내용 : ", error);
            })
        }
    },[])


    return (
        <MyPageContainerWrapper>
            <LeftArea />
            <RightArea />
        </MyPageContainerWrapper>
    )
}

export default MyPageContainer;

const MyPageContainerWrapper = styled.div`
    display: flex;
    margin: auto;
    border-radius: 10px;
    background: white;
    justify-content: center;
    flex-direction: row;
    width: 1200px;
    height: 700px;
`