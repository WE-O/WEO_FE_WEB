import Image from "next/image";
import router from "next/router";
import React, { ReactHTMLElement, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { addModal, deleteModal } from "../../../../store/modules/ModalSlice";
import { userLogOut } from "../../../../store/modules/UserSlice";
import {
    profile_edit_icon,
    profile_kakao_icon,
    profile_naver_icon,
    profile_rightArrow,
    test_IMG,
} from "../../../../utils/images"
import useOnClickOutside from "../../../Common/hooks/useOnClickOutside";

interface imgProps {
    imgSrc: string
}



const LeftAreaContainer = () => {
    const dispatch = useAppDispatch();
    const profileData = useAppSelector((state) => state.user.userData);
    const clickEventType = {
        changeImage: () => {

        },
        changeNickName: () => {
            dispatch(
                addModal({
                    modalNm: 'changeModal',
                    modalParam: { type:"changeModal" },
                }),
            );
            // 닉네임 변경 API 주소 -> /api​/v1 / member / nickname
        },
        logOut: () => {
            dispatch(userLogOut());
            localStorage.removeItem("UserInfo");
            router.push("/main");
        }
    }

    const handleOnClick = useCallback((type: string) => {
        clickEventType[type]();
    }, [])



    return (
        <LeftAreaWrapper >

            <ImageWrapper>
                <ImageCircle imgSrc={profileData.profileImg}>
                    <ImageEdit>
                        <Image
                            src={profile_edit_icon}
                            width={"18px"}
                            height={"18px"}
                        />
                    </ImageEdit>
                </ImageCircle>

            </ImageWrapper>

            <UserInfoWrapper>

                <UserNameWrapper>
                    <span>
                        {profileData.nickname}
                    </span>
                    <ChangeNickNameButton onClick={() => { handleOnClick("changeNickName") }}>
                        <Image
                            src={profile_rightArrow}
                            width={"12px"}
                            height={"15px"}
                        />
                    </ChangeNickNameButton>


                </UserNameWrapper>

                <UserEmailWapper>
                    <Image
                        src={
                            profileData.snsType === "kakao" ? profile_kakao_icon :
                                profileData.snsType === "naver" ? profile_naver_icon :
                                    ""
                        }
                        width={"20px"}
                        height={"20px"}
                    />
                    <span>
                        {profileData.email}
                    </span>
                </UserEmailWapper>

            </UserInfoWrapper>


            <LogoutButton onClick={() => { handleOnClick("logOut") }}>
                로그아웃 버튼
            </LogoutButton>

        </LeftAreaWrapper>
    )
}

export default LeftAreaContainer;

const LeftAreaWrapper = styled.div`
    display: flex;
    min-width: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const ImageWrapper = styled.div`
    padding:36px;
`
const ImageCircle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #C1C1C1;
    position: relative;
    background-image:${(props: imgProps) => `url(${props.imgSrc})`};
    background-size: cover;
`
const ImageEdit = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid #C1C1C1;
    right: 0;
    bottom: 0;
    background:white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor:pointer
`

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const UserNameWrapper = styled.div`
    font-size: 20px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    gap:10px;
`

const UserEmailWapper = styled.div`
    padding:36px;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #9D9EA3;
    display: flex;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`
const LogoutButton = styled.button`
    
    width: 120px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #9D9EA3;
    border-radius: 4px;
    color: rgba(37, 40, 47, 0.65);
    cursor : pointer;
`

const ChangeNickNameButton = styled.button`
    border : 0;
    background : white;
    cursor : pointer;
`