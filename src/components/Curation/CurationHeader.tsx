import styled from "styled-components";

type CurationHeaderType = {
    headerText: string;
}
const CurationHeader = ({ headerText }: CurationHeaderType) => {
    return (
        <>
            <InfomationBox>
                식물 키우기 사전
            </InfomationBox>
            <CurationHeaderStyle>
                <h1>
                    {headerText}
                </h1>
            </CurationHeaderStyle>
            <Line />
        </>
    )
}

export default CurationHeader;

const CurationHeaderStyle = styled.header``
const InfomationBox = styled.div`
    color : #214712;
    box-sizing: border-box;
    width: 130px;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #214712;
    border-radius: 100px;
    text-align: center;
    line-height: 32px;

`
const Line = styled.div`
    width: 100%;
    height: 2px;
    background: #DFDFDF;
`