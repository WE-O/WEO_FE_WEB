import styled from "styled-components";
import { LeftArea, RightArea } from "./Modules";

const MyPageContainer = () => {
    return (
        <MyPageContainerWapper>
            <LeftArea />
            <RightArea />
        </MyPageContainerWapper>
    )
}

export default MyPageContainer;

const MyPageContainerWapper = styled.div`
    display: flex;
    width: 1200px;
    height: 782px;
    margin: auto;
    border-radius: 10px;
    background: white;
    justify-content: center;
    flex-direction: row;
`