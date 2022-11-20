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
import { StaticImageData } from "next/image";

interface CurationType {
    // StaticImageData
    imgSrc: StaticImageData;
    keyWord: string[];
    title: string;
    subText: string;
    clickLink: string;
}

const CurationMap = {
    0: {
        imgSrc: banner_01,
        keyWord: ["공기정화", "실내"],
        title: "실내에서 키우는 공기정화 식물 추천 BEST 4",
        subText: "서브텍스트",
        clickLink: "라우터링크",
    },
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
}

const DicBody = ({ children }) => {

    const getCurationItems = () => {
        const curationItem = [];

        Object.keys(CurationMap).forEach(() => {
            // CurationMap[0][imgSrc] ... 
            curationItem.push()
        })

        return curationItem;
    }

    return (
        <DicBodyWrapper>
            <div>
                <CardWrapper>
                    {/* getCurationItems(); */}
                    {/* <DicContents
                        imgSrc={banner_01}
                        keyWord={["공기정화", "실내"]}
                        title="실내에서 키우는 공기정화 식물 추천 BEST 4"
                        subText="서브텍스트"
                        clickLink="라우터링크"
                    /> */}
                </CardWrapper>

                {/* <CardWrapper>
                    
                </CardWrapper> */}
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
`

const ContentCard = styled.div`
    width: 284px;
    height: 356px;
`