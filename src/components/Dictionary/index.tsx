import styled from "styled-components";
import { DicBody, DicHeader, DicContents } from "./Modules";

const DictionaryContainer = () => {
    return (
        <DicContainer>
            <DicHeader />
            <DicBody>
                <DicContents />
            </DicBody>
        </DicContainer>
    )
}

export default DictionaryContainer;

const DicContainer = styled.div`
    display: flex;
    width: 1200px;
    margin: 0px auto;
    flex-direction: column;
    align-items: flex-start;
    
}
`