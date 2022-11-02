import React from "react";
import { mypage_test,bookmark_icon } from "../../../../../utils/images";
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
                <BookMarkerWrapper>
                    <Image src={bookmark_icon}/>
                </BookMarkerWrapper>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents>

            <Contents>
                <BookMarkerWrapper>
                    <Image src={bookmark_icon} />
                </BookMarkerWrapper>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents><Contents>
                <BookMarkerWrapper>
                    <Image src={bookmark_icon} />
                </BookMarkerWrapper>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents><Contents>
                <BookMarkerWrapper>
                    <Image src={bookmark_icon} />
                </BookMarkerWrapper>
                <Image src={mypage_test} />
                <ContentsText>
                    실내에서 키우는 공기정화 식물 추천 BEST
                </ContentsText>
            </Contents><Contents>
                <BookMarkerWrapper>
                    <Image src={bookmark_icon} />
                </BookMarkerWrapper>
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
    position: relative
`;

const ContentsText = styled.p`

`

const BookMarkerWrapper = styled.div`
    margin-top: 5px;
    width: 15px;
    height: 20px;
    position: absolute;
    z-index: 1;
    right: 0;
    margin-right: 20px;
`

export default ContentsBox;