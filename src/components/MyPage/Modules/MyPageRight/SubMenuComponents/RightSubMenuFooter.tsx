import { useState } from "react";
import styled from "styled-components"
import { Pagination } from "../../../../Common";


export const RightSubMenuFooter = () => {

    const [page, setPage] = useState(1);
    return (
        <RightSubMenuFooterWrapper>
            <Pagination
                total={10}
                limit={3}
                page={page}
                setPage={setPage}
            />
        </RightSubMenuFooterWrapper>
    )
}


const RightSubMenuFooterWrapper = styled.div`
    width: 850px;
    height:20%;
    border-top: solid 1px #DFDFDF;
`