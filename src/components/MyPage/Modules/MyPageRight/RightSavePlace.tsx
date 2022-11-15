import styled from "styled-components";
import { RightSubMenuEmptySet, RightSubMenuFooter, RightSubMenuHeader } from "./SubMenuComponents";
import { RightSubMenuWrapper } from "./SubMenuComponents/RightSubMenuWrapper";

import { UserDataType } from "./RightAreaContainer";
import SavePlace from "./SubMenuComponents/SavedPlace";

interface Props {
    userData: UserDataType
}


const RightSavePlace = (props: Props) => {

    const { bookmarkCnt, reviewCnt, reportCnt, scrapList } = props.userData;

    const getRenderItems = () => {
        const renderArr = [];
        if (bookmarkCnt === 0) {
            renderArr.push(
                <RightSubMenuEmptySet>
                    저장한 장소가 없습니다.
                </RightSubMenuEmptySet>
            )
        } else {
            renderArr.push(
                <SavePlace />
            )
            renderArr.push(
                <SavePlace />
            )
            renderArr.push(
                <SavePlace />
            )
        }
        return renderArr;
    }

    return (
        <RightSubMenuWrapper>
            <RightSubMenuHeader>
                <span>
                    저장한 장소
                </span>
            </RightSubMenuHeader>

            <EditListButton>목록 편집</EditListButton>

            <MainContentsWrapper>
                {/* 저장한 컨텐츠의 수로 판단 */}
                {
                    getRenderItems()

                }
            </MainContentsWrapper>

            <RightSubMenuFooter />

        </RightSubMenuWrapper>
    )
}

const MainContentsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    height:80%;
    flex-direction: column;
    justify-content: space-evenly;
`;

const EditListButton = styled.button`
    border : none;
    background : none;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #9D9EA3;
    cursor : pointer;
    right : 100px;
    position : absolute;
    margin-top:15px;

`

export default RightSavePlace;