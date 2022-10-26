import styled from "styled-components";
import Image from "next/image";
import { plant_icon_1, plant_icon_3 } from "../../../../utils/images"
import Carousel from "../Component/Carousel";

const RightMain = () => {
    return (
        <RightAreaWrapper>
            <TopWrapper>
                <TitleWrapper>
                    <Image src={plant_icon_3} width={"20px"} height={"20px"} />
                    <span>활동현황</span>
                </TitleWrapper>

                <StatusBoard>
                    <StatusInnerBox>
                        <p>저장한 장소</p>
                        <span>5</span>
                    </StatusInnerBox>
                    <StatusInnerBox>
                        <p>방문 후기 작성</p>
                        <span>25</span>
                    </StatusInnerBox>
                    <StatusInnerBox>
                        <p>장소 제보</p>
                        <span>15</span>
                    </StatusInnerBox>
                </StatusBoard>

            </TopWrapper>
            <BottomWrapper>
                <TitleWrapper>
                    <Image src={plant_icon_1} width={"20px"} height={"20px"} />
                    <span>스크랩한 콘텐츠</span>
                </TitleWrapper>


                <ScrapContents>

                    <Carousel/>

                    <WithDrawal>
                        회원탈퇴
                    </WithDrawal>
                </ScrapContents>



            </BottomWrapper>
        </RightAreaWrapper>
    )
}

export default RightMain;

const RightAreaWrapper = styled.div`
    border-left: solid 1px #DFDFDF;
    min-width:907px;
`;
const TopWrapper = styled.div`
    padding:32px;
    height: 30%;
    min-height: 200px;
`;

const TitleWrapper = styled.div`
    padding:5px;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    color: #242424;

    span{
        padding : 15px;
    }
`;

const StatusBoard = styled.div`
    margin-top:15px;
    background: #FFFFFF;
    width: 807px;
    height:90%;
    border: 1px solid #DFDFDF;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center
`;

const StatusInnerBox = styled.div`

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #6F6F6F;
    }

    span {
        cursor : pointer;
        text-decoration : underline;
        font-weight: 700;
        font-size: 26px;
        line-height: 39px;
    }

`;

const ScrapContents = styled.div`
    position: relative;
    margin-top:15px;
    background: #FFFFFF;
    width: 820px;
    height:90%;
    background: #C1C1C1;
`;

const WithDrawal = styled.div`
        position : absolute;
        right : 0;
        bottom : 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        text-decoration-line: underline;
        cusor : pointer;
        color: #9D9EA3;
`

const BottomWrapper = styled.div`
    padding:35px;
    height:65%;
`;

const textWrapper = styled.span`
    padding:5px;
`;