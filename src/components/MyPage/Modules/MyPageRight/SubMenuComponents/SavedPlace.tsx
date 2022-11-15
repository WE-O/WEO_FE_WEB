import styled from "styled-components";

interface Props{
    title: string;
    subTitle: string;
    userMemo: string;
}

const SavePlace = () => {
    return (
        <SavePlaceWrapper>

            <Title>
                디자인 화원
            </Title>

            <Address>
                서울시 양천구 목동동로 10단지 A상가 101호
            </Address>

            <UserMemo
                placeholder = " 사용자가 저장한 메모가 없을 땐 메모를 남겨보세요. 라는 텍스트를 노출해주세욥."
            />

        </SavePlaceWrapper>
    )
}

export default SavePlace;


const SavePlaceWrapper = styled.div`
    border-bottom: solid 1px #DFDFDF;
    width:90%
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    color: #214712;
    margin-bottom : 5px;
`;
const Address = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: #3D3D3D;
    margin-bottom : 5px;
`;
const UserMemo = styled.input`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #6F6F6F;
    margin-bottom : 15px;
    width:90%;
    height: 48px;
`;