import styled from "styled-components"
import { Pagination } from "../../../../Common";


export const RightSubMenuFooter = () => {
    return (
        <RightSubMenuFooterWrapper>
            <Pagination />
        </RightSubMenuFooterWrapper>
    )

}


const RightSubMenuFooterWrapper = styled.div`
    width: 850px;
    height:20%;
    border-top: solid 1px #DFDFDF;
`