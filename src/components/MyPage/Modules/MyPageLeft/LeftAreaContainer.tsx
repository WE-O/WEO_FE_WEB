import Image from "next/image";
import styled from "styled-components";
import { kakaoLoginButton } from "../../../../utils/images"

interface imgProps{
    imgSrc : any
}

const LeftAreaContainer = () => {
    return (
        <LeftAreaWrapper>

            <ImageWrapper>
                <ImageCircle imgSrc={""}/>
                <ImageEdit imgSrc={""}>
                    ⭐️
                </ImageEdit>
            </ImageWrapper>

            <UserInfoWrapper>

                <UserNameBox>
                    { "이름  👉"}
                </UserNameBox>

                <UserEmailWapper>
                    <UserEmail>
                        <LoginTypeImage>
                            ✅
                        </LoginTypeImage>
                        psh950@naver.com
                    </UserEmail>
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
    justify-content: center;
`
const ImageWrapper = styled.div`
    padding:36px;
`
const ImageCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #C1C1C1;
    position: relative;
    background-image:${(props: imgProps) => props.imgSrc};
`
const ImageEdit = styled.div`
    position: relative;
    // background-image:${(props: imgProps) => props.imgSrc};
`
const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const UserNameBox = styled.div`
    padding:36px;
`
const UserEmailWapper = styled.div`
    padding:27px;
`

const LoginTypeImage = styled.span`

`

const UserEmail = styled.div`

`
const LogoutButton = styled.button`
    
`