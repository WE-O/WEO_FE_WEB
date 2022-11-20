import Image, { StaticImageData } from "next/image";
import router from "next/router";
import styled from "styled-components";

interface CurationType {
    // StaticImageData
    curationId: number;
    imgSrc: StaticImageData;
    keyWord: string[];
    title: string;
    subText: string;
    clickLink: string;
}

const DicContents = (props: CurationType) => {

    const textLengthOverCut = (txt:string) => {
        const len = 48;
        const lastTxt = "...";
        if (txt.length > len) {
            txt = txt.substr(0, len) + lastTxt;
        }
        return txt;
    }


    const getKeyWord = () => {
        const returnItem = [];
        props.keyWord.forEach((iter,idx) => {
            returnItem.push(
                <KeyWord key={idx}>
                    {iter}
                </KeyWord>
            )
        })
        return returnItem;
    }

    const handleOnClick = () => {
        router.push(props.clickLink);
    }

    
    return (
        <ContentCard onClick={handleOnClick}>
            {/* 클릭이벤트 라우터 걸기 */}
            <Image
                src={props.imgSrc}
                width={284}
                height={171}
            />

            <InfoBox>
                <KeyWordWrapper>
                    {getKeyWord()}
                </KeyWordWrapper>

                <Line />


                <InfoTextBox>
                    <TitleText>
                        {props.title}
                    </TitleText>
                    <br/>
                    <SubText>
                        {textLengthOverCut(props.subText)}
                    </SubText>

                </InfoTextBox>
            </InfoBox>

        </ContentCard>

    )
}

export default DicContents;


const InfoBox = styled.div`
    width: 284px;
    height: 185px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const Line = styled.div`
    width: 97%;
    height: 0.5px;
    background: #c9cacf;
    align-self: center;
    margin-top: -5px;
`

const KeyWordWrapper = styled.div`
    margin-top:3px;
`

const KeyWord = styled.div`
    color: #22CC88;
    border: 1.5px solid;
    text-align: center;
    display:inline-block;
    padding : 5px;
    margin:8px;
`

const InfoTextBox = styled.div`
    margin : 8px;
`
const TitleText = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: #3D3D3D;
`
const SubText = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: #9D9EA3;
`
const ContentCard = styled.div`
    width: 284px;
    height: 380px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
    cursor : pointer;
    :hover {
        transform:scale(1.1);
        transition: transform .5s;
    }
`

