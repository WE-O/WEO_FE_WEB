import styled from "styled-components";
import { LeftArea, RightArea } from "./Modules";

const MyPageContainer = () => {
    return (
        <MyPageContainerWrapper>
                <LeftArea />
                <RightArea />
        </MyPageContainerWrapper>
    )
}

export default MyPageContainer;

const MyPageContainerWrapper = styled.div`
    display: flex;
    margin: auto;
    border-radius: 10px;
    background: white;
    justify-content: center;
    flex-direction: row;
    width: 1200px;
    height: 782px;
`