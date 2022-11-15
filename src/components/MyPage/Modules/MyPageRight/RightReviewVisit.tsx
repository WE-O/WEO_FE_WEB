import styled from "styled-components";
import { RightSubMenuEmptySet, RightSubMenuFooter, RightSubMenuHeader } from "./SubMenuComponents";
import { RightSubMenuWrapper } from "./SubMenuComponents/RightSubMenuWrapper";

import { UserDataType } from "./RightAreaContainer";

interface Props {
    userData: UserDataType
}

const RightReviewVisit = (props:Props) => {
    return (
        <RightSubMenuWrapper>
            <RightSubMenuHeader>
                <span>
                    방문 후기 작성
                </span>
            </RightSubMenuHeader>

            <MainContentsWrapper>
                {/* 저장한 컨텐츠의 수로 판단 */}
                {
                    <RightSubMenuEmptySet>
                        작성한 방문 후기가 없습니다.
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

export default RightReviewVisit;