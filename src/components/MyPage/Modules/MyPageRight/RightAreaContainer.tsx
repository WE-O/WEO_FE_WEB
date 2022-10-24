import styled from "styled-components";

const RightAreaContainer = () => {
    return (
        <RightAreaWrapper>
            <TopWrapper>
                <TitleWrapper>
                    🪴 활동현황
                </TitleWrapper>

                <StatusBoard>
                    <div>저장한 장소</div>
                    <div>방문 후기 작성</div>
                    <div>장소 제보</div>
                </StatusBoard>

            </TopWrapper>
            <BottomWrapper>
                <TitleWrapper>
                    🪴 스크랩한 콘텐츠
                </TitleWrapper>


                <ScrapContents>

                </ScrapContents>

            </BottomWrapper>
        </RightAreaWrapper>
    )
}

export default RightAreaContainer;

const RightAreaWrapper = styled.div`
    border-left: solid 1px #DFDFDF;
    min-width:907px;
`;
const TopWrapper = styled.div`
    padding:32px;
    height:45%;
`;

const TitleWrapper = styled.div`
    padding:5px;
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    color: #242424;
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
`;
const ScrapContents = styled.div`
    margin-top:15px;
    background: #FFFFFF;
    width: 807px;
    height:90%;
    background: #C1C1C1;
`;

const BottomWrapper = styled.div`
    padding:32px;
    height:55%;
`;