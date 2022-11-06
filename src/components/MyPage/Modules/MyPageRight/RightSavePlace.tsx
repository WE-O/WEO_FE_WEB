import styled from "styled-components";
import { RightSubMenuEmptySet, RightSubMenuFooter, RightSubMenuHeader } from "./SubMenuComponents";
import { RightSubMenuWrapper } from "./SubMenuComponents/RightSubMenuWrapper";

const RightSavePlace = () => {
    return (
        <RightSubMenuWrapper>
            <RightSubMenuHeader>
                <span>
                    저장한 장소
                </span>
            </RightSubMenuHeader>

            <MainContentsWrapper>
                {/* 저장한 컨텐츠의 수로 판단 */}
                {
                    <RightSubMenuEmptySet>
                        저장한 장소가 없습니다.
                    </RightSubMenuEmptySet>
                }
            </MainContentsWrapper>

            <RightSubMenuFooter/>
                
        </RightSubMenuWrapper>
    )
}

const MainContentsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:80%;
`;

export default RightSavePlace;