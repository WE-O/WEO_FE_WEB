import styled from "styled-components";
import DicContents from "./DicContents";
import {
    banner_01,
    banner_02,
    banner_03,
    banner_04,
    banner_05,
    banner_06,
    banner_07,
    banner_08,
} from "../../../utils/images";

const CurationMap = {
    0: {
        curationId:0,
        imgSrc: banner_01,
        keyWord: ["플랜테리어", "테라리움"],
        title: "책상 위 작은 정원, 테라리움 만들기",
        subText: "테라리움이란 밀폐된 유리 그릇이나 아가리가 작은 유리병 따위의 안에 작은 식물을 재배하는 방법을 뜻합니다. 책상위 작은 정원으로 많이들 알고 계실 거에요! ",
        clickLink: "./curation/curation001",
    },
    1: {
        curationId: 1,
        imgSrc: banner_02,
        keyWord: ["공기정화식물"],
        title: "스투키꽃이 피나요?",
        subText: "서브텍스트",
        clickLink: "./curation/curation002",
    },
    2: {
        curationId: 2,
        imgSrc: banner_03,
        keyWord: ["식물샵"],
        title: "식집사들의 떠오르는 성지, 식물샵",
        subText: "‘식물샵’에 방문해 본 경험이 있으신가요? 오늘은 식식물물 집사 여러분을 위해 식집사들의 성지, 식물샵(플랜트샵) 4곳을 소개하려고 합니다. ",
        clickLink: "./curation/curation003",
    },
    3: {
        curationId: 3,
        imgSrc: banner_04,
        keyWord: ["다육이", "다육식물"],
        title: "다육이 집사가 되어보시겠어요?",
        subText: "안녕하세요 식물집사 여러분! 오늘은 집, 회사 등 어디에서나 쉽게 키울 수 있는 다육식물(다육이) 3종을 추천해드리겠습니다. ",
        clickLink: "./curation/curation004",
    },
    4: {
        curationId: 4,
        imgSrc: banner_05,
        keyWord: ["공기정화"],
        title: "실내에서 키우는 공기정화 식물 추천 BEST 4",
        subText: "안녕하세요 식물집사 여러분! 식물을 키우고 있는 사람들을 대상으로 반려 식물을 키우는 목적을 조사한 한 조사에 따르면, ‘공기 정화를 위해’ 식물을 키운다고 한 답변이 1위(58%)를 차지했다고 하는데요. ",
        clickLink: "./curation/curation005",
    },
    5: {
        curationId: 5,
        imgSrc: banner_06,
        keyWord: ["분갈이"],
        title: "식물도 이사가 필요해요, 분갈이의 모든 것!",
        subText: "식물을 키우고 있는 초보 집사라면 누구나 하는 고민, 바로 분갈이인데요. 언제 분갈이를 해야하는지, 얼마나 자주 분갈이를 해야하는지 등 분갈이에 관한 정보를 알려드리고자 합니다.",
        clickLink: "./curation/curation006",
    },
    6: {
        curationId: 6,
        imgSrc: banner_07,
        keyWord: ["물주기자동화"],
        title: "식물 키우기가 두렵다면 물주기 자동화 해보세요",
        subText: "안녕하세요, 식집사를 위한 서비스 <식식물물>입니다. 식물 키우기가 두려우신가요?  걱정 하지 마세요. 언제 얼마나 물을 줘야하는 지 신경쓸 필요 없이 똑똑하게 조절해주는 화분과 함께라면 어떤 식물도 잘 키워낼 수 있습니다.",
        clickLink: "./curation/curation007",
    },
    7: {
        curationId: 7,
        imgSrc: banner_08,
        keyWord: ["식테크"],
        title: "테슬라 주식보다 10배 돈 잘 버는 식물 재테크 방법",
        subText: "안녕하세요, 식집사를 위한 서비스 <식식물물>입니다. 식물 재테크, 줄여서 식테크라고 많이 말합니다. 식테크를 한 문장으로 정의하면 ‘식물로 돈을 번다’입니다. ",
        clickLink: "./curation/curation008",
    },
}

const DicBody = ( ) => {

    const getCurationItems = (startIndex: number, endIndex: number) => {
        const curationItem = [];
        for (let i = startIndex; i <= endIndex; i++) {
            const item = CurationMap[i];
            curationItem.push(
                <DicContents
                    curationId={item.curationId}
                    imgSrc={item.imgSrc}
                    keyWord={item.keyWord}
                    title={item.title}
                    subText={item.subText}
                    clickLink={item.clickLink}
                />
            )
        }
        return curationItem;
    }

    return (
        <DicBodyWrapper>
            <div>
                <CardWrapper>
                    {getCurationItems(0, 3)}
                </CardWrapper>
                <CardWrapper>
                    {getCurationItems(4, 7)}
                </CardWrapper>
            </div>
        </DicBodyWrapper>
    )
}
export default DicBody;

const DicBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 120px;
    margin-bottom: 30px;
    margin-left: 7px;
    display : flex;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
`
const CardWrapper = styled.div`
    display : flex;
    gap : 20px;
    margin-bottom:60px;
`