import styled from "styled-components";
import { LeftArea, RightArea } from "./Modules";

const MyPageContainer = () => {
    return (
        <MyPageContainerWapper>
            <LeftArea />
            <RightArea/>
        </MyPageContainerWapper>
    )
}

export default MyPageContainer;

const MyPageContainerWapper = styled.div`
    width:100px;
    height:100px;
    background:white;
`