import styled from "styled-components";
import Image from "next/image";
import { plant_icon_1, plant_icon_3, profile_rightArrow , profile_leftArrow} from "../../../../utils/images"
// import Carousel from "../Component/Carousel/Carousel";
import ContentsBox from "../Component/ContentsBox/ContentsBox";
import { useAppDispatch } from "../../../../store/hooks";
import { addModal } from "../../../../store/modules/ModalSlice";

const RightMain = () => {

    // const dispatch = useAppDispatch();
    // dispatch(addModal('commonModal'));
    
    return (
        <RightAreaWrapper>
            <TopWrapper>
                <TitleWrapper>
                    <div>
                        <Image src={plant_icon_3} width={"20px"} height={"20px"} />
                        <span>활동현황</span>
                    </div>

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
                    <div>
                        <Image src={plant_icon_1} width={"20px"} height={"20px"} />
                        <span>스크랩한 콘텐츠</span>
                    </div>

                    <ButtonWrapper>
                        <button>
                            <Image src={profile_leftArrow} />
                        </button>
                        <button>
                            <Image src={profile_rightArrow} />
                        </button>
                    </ButtonWrapper>

                </TitleWrapper>


                
                <ScrapContents>


                    {/*  콘텐츠 보여주는 박스 */}
                    <ContentsBox />

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

    display: flex;
    justify-content: space-between;

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
`;

const WithDrawal = styled.div`
        position : absolute;
        right : 0;
        bottom : 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-decoration-line: underline;
        cursor : pointer;
        color: #9D9EA3;
`

const BottomWrapper = styled.div`
    padding:35px;
    height:65%;
`;

const ButtonWrapper = styled.div`
    
    button {
        border : 0;
        background : white;
        width : 25px;
        margin : 5px;
        
    }
`