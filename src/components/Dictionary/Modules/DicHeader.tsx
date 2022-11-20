import styled from "styled-components";

const DicHeader = () => {
    return (
        <DicHeaderWrapper>
            <MainText>
                식물 키우기 사전
            </MainText>
            <br/>
            <SubText>
                식집사만을 위한 단 8가지 가이드 <br/>
                반려식물과 같이 살기 위한 첫걸음을 준비해 보세요.
            </SubText>
            <Line/>
        </DicHeaderWrapper>
    )
}
export default DicHeader;

const DicHeaderWrapper = styled.div`
    width : 100%;
    height: 100px;
    margin-left: 7px;
`
const MainText = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
`
const SubText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8B8B8B;
`
const Line = styled.div`
    border-bottom: 1.5px solid #DFDFDF;
    height:65px;
`