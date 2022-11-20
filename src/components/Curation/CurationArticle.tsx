import styled from "styled-components";

interface CurationArticleType {
    articleText: string;
}

const CurationArticle = ({ articleText }: CurationArticleType) => {
    return (
        <CurationArticleWrapper>
            {articleText}
        </CurationArticleWrapper>
    )
}
export default CurationArticle;

const CurationArticleWrapper = styled.article`

`