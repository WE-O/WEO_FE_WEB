import styled from "styled-components";

const RightAreaContainer = () => {
    return (
        <RightAreaWrapper>
            <TopWrapper>
                🪴 활동현황

                <StatusBoard>

                </StatusBoard>

            </TopWrapper>
            <BottomWrapper>
                🪴 스크랩한 콘텐츠

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
`
const TopWrapper = styled.div`
    padding:32px;
    height:45%;
`

const StatusBoard = styled.div`
    // background: #FFFFFF;
    height:100%;
    background: red;
`
const ScrapContents = styled.div`
// background: #FFFFFF;
    height:100%;
    background: blue;
`

const BottomWrapper = styled.div`
    padding:32px;
    height:55%;
`