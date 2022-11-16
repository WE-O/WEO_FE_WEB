import styled from "styled-components";
import Image from "next/image";
import { plant_icon_1, plant_icon_3 } from "../../../../utils/images"
import RightMain from "./RightMain";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import RightSavePlace from "./RightSavePlace";
import RightReviewVisit from "./RightReviewVisit";
import RightReportPlace from "./RightReportPlace";


export type UserDataType = {
    bookmarkCnt: number;
    reviewCnt: number;
    reportCnt: number;
    scrapList: [];
}

const RightAreaContainer = () => {

    const dispatch = useAppDispatch();
    // todo 셀렉터 최적화 하는법
    const myPageIdx = useAppSelector((state) => state.myPage.pageIndex);
    const userData = useAppSelector((state) => state.user.userData);

    return (
        <RightAreaWrapper>
            {
                myPageIdx === 0 ?
                    <RightMain userData={userData}/> : // 메인
                    myPageIdx === 1 ?
                        <RightSavePlace userData={userData}  /> : // 저장한 장소
                        myPageIdx === 2 ?
                            <RightReviewVisit userData={userData}  /> : // 방문 후기 작성
                            <RightReportPlace userData={userData}  /> // 장소 제보
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