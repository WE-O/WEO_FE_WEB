import React from "react";
import styled from "styled-components";
import { CurationHeader, CurationArticle } from "../../../components/Curation";
import CurationContainer from "../../../components/Curation/CurationContainer";
import Image from "next/image";
import { curImg_1, curImg_2, curImg_3, curImg_4 } from "../../../utils/curation/curation001/img";
import YoutubePlayer from "../../../components/Curation/YoutubePlayer";


const Curation002 = () => {



    return (
        <CurationContainer>

            <CurationHeader headerText="플랜테리어를 아시나요? " />

            <CurationInnerBox>
                <article>
                    <br />안녕하세요, 식집사를 위한 서비스 &lt;식식물물&gt; 입니다.<br />
                    안녕하세요 식물집사 여러분! <br />
                    플랜테리어를 아시나요?<br />
                    ‘식물(Plant)’와 ‘인테리어(Interior)의 합성어로 식물로 실내를 꾸미는 인테리어를 뜻해요.<br /><br />

                    플랜테리어는 공기 정화 효과와 실내 습도 조절은 물론<br />
                    심신 안정과 집중력 향상에도 도움이 되고 있어 한창 인기를 끌고 있는데요,<br />
                    플랜테리어에 관심 있는 초보 식집사 여러분에게 도움이 될 만한 영상 몇 가지를 추천해드릴게요 🙂<br />
                    <br />
                    <h1>[1] 싱그러운 집을 만드는 플랜테리어 - 베란다 없는 실내에서 잘 자라는 식물 Top 10</h1>

                    <figure>
                        <YoutubePlayer videoId={"Yo7PTwZ8rhg"} width={"1024"} height={"550"} />
                        <figcaption>영상 출처 : <a href="https://youtu.be/Yo7PTwZ8rhg">https://youtu.be/Yo7PTwZ8rhg</a></figcaption>
                    </figure>

                    <br />

                    <h1>[2] 꽃집 사장님이 추천하는 가장 잘 나가는 플랜테리어 식물 TOP5</h1>

                    <figure>
                        <YoutubePlayer videoId={"XFspmzVV2Io"} width={"1024"} height={"550"} />
                        <figcaption>영상 출처 : <a href="https://youtu.be/XFspmzVV2Io">https://youtu.be/XFspmzVV2Io</a></figcaption>
                    </figure>

                    <br />
                    
                    <h1>[3] 플랜테리어 하기 좋은 식물의 유형과 종류 - 식물 구입 전에 꼭 한번 보세요</h1>

                    <figure>
                        <YoutubePlayer videoId={"UKfOWXflQSI"} width={"1024"} height={"550"} />
                        <figcaption>영상 출처 : <a href="https://youtu.be/UKfOWXflQSI">https://youtu.be/UKfOWXflQSI</a></figcaption>
                    </figure>

                    <br />
                
                    <h1>플랜테리어에 대한 궁금증이 해소되셨나요?</h1>
                    <hr />
                    긴 글 읽어주셔서 감사합니다. 식식물물.<br />
                    <br />
                    <h2>© 글에 대한 저작권은 식식물물이 보유하고 있습니다.</h2>
                    <br /><br /><br />
                </article>

            </CurationInnerBox>
        </CurationContainer>
    );
};

export default Curation002;

const CurationInnerBox = styled.div`
    display: flex;
    width: 1024px;
    margin: 0px auto;
    flex-direction: column;
    align-items: flex-start;

    article{
        // font-weight: Noto Sans CJK KR-Regular;
        font-family: 'Noto Sans CJK KR';
        font-size: 16px;
        letter-spacing: -0.1px;
        line-height: 34px;
    }
    a{
        color: gray;
    }
`