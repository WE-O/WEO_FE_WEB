import styled from "styled-components";
import { RightSubMenuEmptySet, RightSubMenuFooter, RightSubMenuHeader } from "./SubMenuComponents";
import { RightSubMenuWrapper } from "./SubMenuComponents/RightSubMenuWrapper";
import { UserDataType } from "./RightAreaContainer";
import { call } from "../../../../api/apis";
import { useEffect, useState } from "react";

interface Props {
    userData: UserDataType
}

const RightReviewVisit = (props: Props) => {
    const [reviewItem, setReviewItem] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const memberId = JSON.parse(localStorage.getItem("UserInfo"))?.memberId;
            const param = {
                url: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/review/${memberId}`,
                data: {}
            }
            const responseData = await call("GET", param);
            if (responseData.length > 0) {
                setReviewItem(responseData);
            }
        }
        fetchData()
    }, [])

    const getReviewList = () => {
        const renderItem = [];
        if (reviewItem.length === 0) {
            renderItem.push(
                <RightSubMenuEmptySet>
                    작성한 방문 후기가 없습니다.
                </RightSubMenuEmptySet>
            )

        } else {


            if (reviewItem.length > 0) {
                reviewItem.forEach((iter) => {
                    const ymdIndex = iter.regDate.indexOf('T');
                    const hmsIndex = iter.regDate.indexOf('.');
                    debugger
                    renderItem.push(
                        <ReviewWrapper>
                            <ReviewTitle>
                                {iter.placeName}
                            </ReviewTitle>
                            <ReviewDate>
                                {
                                    `${iter.regDate.substring(0, ymdIndex)} ${iter.regDate.substring(ymdIndex + 1, hmsIndex)}`
                                }
                            </ReviewDate>
                            <ReviewText>
                                {iter.contents}
                            </ReviewText>
                            <ReviewLine />
                        </ReviewWrapper>
                    )
                })
            }
        }
        return renderItem;
    }

    return (
        <RightSubMenuWrapper>
            <RightSubMenuHeader>
                <span>
                    방문 후기 작성
                </span>
            </RightSubMenuHeader>

            <MainContentsWrapper>
                {
                    getReviewList()
                }
            </MainContentsWrapper>

            <RightSubMenuFooter />

        </RightSubMenuWrapper>
    )
}

const MainContentsWrapper = styled.div`
    display: flex;
    align-items: center;
    height:80%;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap:10px;
`;

const ReviewWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    height: 150px;
    width : 100%;
    margin : 10px;
`
const ReviewTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #214712;
`
const ReviewDate = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #3D3D3D;
`
const ReviewText = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #6F6F6F;
`
const ReviewLine = styled.div`
    width : 90%;
    border-bottom: 1px solid #D9D9D9;
    align-self: center;
    margin-right : 80px;
`
export default RightReviewVisit;