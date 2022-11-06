import styled from "styled-components";
import Image from "next/image";
import { plant_icon_1, plant_icon_3 } from "../../../../utils/images"
import RightMain from "./RightMain";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import RightSavePlace from "./RightSavePlace";
import RightReviewVisit from "./RightReviewVisit";
import RightReportPlace from "./RightReportPlace";

const RightAreaContainer = () => {

    const dispatch = useAppDispatch();
    // todo 셀렉터 최적화 하는법 
    const myPageIdx = useAppSelector((state) => state.myPage.pageIndex);

    return (
        <RightAreaWrapper>
            {
                myPageIdx === 0 ?
                    <RightMain /> : // 메인
                    myPageIdx === 1 ?
                        <RightSavePlace /> : // 저장한 장소
                        myPageIdx === 2 ?
                            <RightReviewVisit /> : // 방문 후기 작성
                            <RightReportPlace /> // 장소 제보
            }
        </RightAreaWrapper>
    )
}

const RightAreaWrapper = styled.div`
    border-left: solid 1px #DFDFDF;
    min-width:907px;
    // width:1000px;
`;

export default RightAreaContainer;