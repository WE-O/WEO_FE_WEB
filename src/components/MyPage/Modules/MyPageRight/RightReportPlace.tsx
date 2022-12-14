import styled from "styled-components";
import { RightSubMenuEmptySet, RightSubMenuFooter, RightSubMenuHeader } from "./SubMenuComponents";
import { RightSubMenuWrapper } from "./SubMenuComponents/RightSubMenuWrapper";

import { UserDataType } from "./RightAreaContainer";

interface Props {
    userData: UserDataType
}

const RightReportPlace = (props:Props) => {
    return (
        <RightSubMenuWrapper>
            <RightSubMenuHeader>
                <span>
                    장소 제보
                </span>
            </RightSubMenuHeader>

            <MainContentsWrapper>
                {/* 저장한 컨텐츠의 수로 판단 */}
                {
                    <RightSubMenuEmptySet>
                        제보한 장소가 없습니다.
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

export default RightReportPlace;