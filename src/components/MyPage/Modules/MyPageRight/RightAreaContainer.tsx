import styled from "styled-components";
import Image from "next/image";
import { plant_icon_1, plant_icon_3 } from "../../../../utils/images"
import RightMain from "./RightMain";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const RightAreaContainer = () => {

    const dispatch = useAppDispatch();
    // const pageIndex = useAppSelector((state) => state.modal.modalList);
    
    // idx page
    //  0   메인
    //  1   저장한 장소
    //  2   방문 후기 작성
    //  3   장소 제보

    return (
        <RightMain/>
    )
}

export default RightAreaContainer;