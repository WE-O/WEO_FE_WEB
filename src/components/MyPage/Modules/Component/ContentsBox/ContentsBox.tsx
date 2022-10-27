import React from "react";
import { mypage_test, leftArrow, rightArrow } from "../../../../../utils/images";
import styled from "styled-components";
import Image from "next/image";

const ContentsBox = () => {

    const getRenderItems = (param) => {
        return (
            param.map(item => (
                <Contents>
                    <Image src={param} />
                    <ContentsText>
                        {param}
                    </ContentsText>
                </Contents>  
            ))
        )
    }

    return (
        <ContentsBoxWrapper>
            <Contents>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            <Contents>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            <Contents>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            <Contents>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            <Contents>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            
        </ContentsBoxWrapper>
    )

}

const ContentsBoxWrapper = styled.div`
    width : 100%;
    display: flex;
`;

const Contents = styled.div`
    min-width : 160px;
    min-height : 120px;
    width : 25%;
    padding : 10px;
`;

const ContentsText = styled.p`

`

export default ContentsBox;