import styled from "styled-components";

const DicBody = ({children}) =>{
    return (
        <DicBodyWrapper>
            바디
            바디
            바디
            바디
        </DicBodyWrapper>
    )
}
export default DicBody;

const DicBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 120px;
    margin-bottom: 30px;
    margin-left: 7px;
`