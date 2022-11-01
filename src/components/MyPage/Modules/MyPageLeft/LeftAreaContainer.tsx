import Image from "next/image";
import React, { ReactHTMLElement, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../store/hooks";
import { addModal, deleteModal } from "../../../../store/modules/ModalSlice";
import {
    profile_edit_icon,
    profile_kakao_icon,
    profile_naver_icon,
    profile_rightArrow,
    test_IMG,
} from "../../../../utils/images"
import useOnClickOutside from "../../../Common/hooks/useOnClickOutside";

interface imgProps {
    imgSrc: any
}

const LeftAreaContainer = () => {

    const dispatch = useAppDispatch();
    
    const handleOnClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        dispatch(addModal('commonModal'));
    }, [])
    
    useEffect(() => {
        const callAPIURL = `${process.env.NEXT_PUBLIC_API_DOMAIN}api/v1/member/join`;
    },[])

    return (
        <LeftAreaWrapper >

            <ImageWrapper>
                <ImageCircle imgSrc={test_IMG}>
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
                        닉네임은최대10글자로제한
                    </span>
                    <ChangeNickNameButton onClick={handleOnClick}>
                        <Image
                            src={profile_rightArrow}
                            width={"12px"}
                            height={"15px"}
                        />
                    </ChangeNickNameButton>


                </UserNameWrapper>

                <UserEmailWapper>
                    <Image
                        src={profile_kakao_icon}
                        width={"20px"}
                        height={"20px"}
                    />
                    <span>
                        psh950@naver.com
                    </span>
                </UserEmailWapper>

            </UserInfoWrapper>


            <LogoutButton>
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
    background-image:${(props: imgProps) => `url(${props.imgSrc.src})`};
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
    cursor : pointer;
`

const ChangeNickNameButton = styled.button`
    border : 0;
    background : white;
    cursor : pointer;
`