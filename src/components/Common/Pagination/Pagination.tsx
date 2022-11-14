import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface paginationProps {
    total: number;
    limit: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>
}

const Pagination = (props: paginationProps) => {

    // 총 페이지의 갯수 = Math.floor(총 게시글 / 3)
    // 표시해야할 게시글의 인덱스 = ( 현재 인덱스 - 1 ) * 3

    // API 비동기 통신
    const { total, limit, page, setPage } = props;
    const numPages = Math.ceil(total / limit);


    return (
        <PaginationWrapper>
            <Nav>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    &lt;
                </Button>

                {Array(numPages)
                    .fill(0)
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            aria-current={page === i + 1 ? "page" : null}
                        >
                            {i + 1}
                        </Button>
                    ))}
                
                <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
                    &gt;
                </Button>

            </Nav>
        </PaginationWrapper>

    )
}

const PaginationWrapper = styled.div`

`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: white;
  color: #214712;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    font-weight: bold;
    text-decoration: underline;
    cursor: revert;
    transform: revert;
  }
`;


export default Pagination;