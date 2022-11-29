import React from "react";
import styled from "styled-components";
import { CurationHeader, CurationArticle } from "../../../components/Curation";
import CurationContainer from "../../../components/Curation/CurationContainer";
import Image from "next/image";
import { curImg_1,curImg_2,curImg_3,curImg_4 } from "../../../utils/curation/curation001/img";
import YoutubePlayer from "../../../components/Curation/YoutubePlayer";


const Curation001 = () => {
    return (
        <CurationContainer>

            <CurationHeader headerText="테라리움에 대해 들어보신 적 있나요?" />

            <CurationInnerBox>
                <article>
                    <br />안녕하세요, 식집사를 위한 서비스 &lt;식식물물&gt; 입니다.<br />
                    <h1>테라리움에 대해 들어보신 적 있나요?</h1>
                    테라리움이란 밀폐된 유리 그릇이나 아가리가 작은 유리병 따위의 안에 작은 식물을 재배하는 방법을 뜻합니다.<br />
                    책상위 작은 정원으로 많이들 알고 계실 거에요!<br />
                    
                    <figure>
                        <br />
                        <Image src={curImg_1.src} width={"500px"} height={"450px"} />
                        &nbsp;&nbsp;&nbsp;
                        <Image src={curImg_2.src} width={"500px"} height={"450px"} />
                        <figcaption>이미지 출처 : <a href="https://blog.naver.com/ysqueen1/222890984348">https://blog.naver.com/ysqueen1/222890984348</a></figcaption>
                    </figure>

                    <br />
                    <br />

                    <h1>혹시, 짱구 좋아하시나요?</h1><br />
                    <figure>
                        <Image src={curImg_3.src} width={"500px"} height={"450px"} />
                        &nbsp;&nbsp;&nbsp;
                        <Image src={curImg_4.src} width={"500px"} height={"450px"} />
                        <figcaption>이미지 출처 : <a href="https://blog.naver.com/ysqueen1/222890984348">https://blog.naver.com/ysqueen1/222890984348</a></figcaption>
                        <figcaption>이미지 출처 : <a href="https://blog.naver.com/ysqueen1/222890984348">https://blog.naver.com/ysqueen1/222890984348</a></figcaption>
                        <br />
                    </figure>


                    요즘은 평소 좋아하는 캐릭터의 피규어와 식물을 결합해 아기자기한 나만의 테라리움을 꾸미는 분들이 많이 계시답니다. <br />
                    <h1>테라리움 만드는 방법? 어렵지 않아요!</h1>
                    사실 유리 병에 모래를 부어주고, 병 안에서 자라게될 미끼를 올려주면 끝이 난답니다.<br />
                    더 자세하게, 어떻게 테라리움을 만들 수 있는지 영상으로 알아볼까요? 유튜브에서 가장 인기가 많은 영상 2개를 가지고 왔습니다.<br />
                    <br />
                    - (초급) 다이소 재료로 테라리움 만들기<br />
                    <figure>
                        <YoutubePlayer videoId={"qj2g11iZnFw"} width={"1024"} height={"550"} />
                        <figcaption>영상 출처 : <a href="https://youtu.be/v=qj2g11iZnFw">https://youtu.be/v=qj2g11iZnFw</a></figcaption>
                    </figure>

                    <br />

                    <figure>
                        <YoutubePlayer videoId={"WQqbQ3zqU-w"} width={"1024"} height={"550"} />
                        <figcaption>영상 출처 : <a href="https://youtu.be/v=WQqbQ3zqU-w">https://youtu.be/v=WQqbQ3zqU-w</a></figcaption>
                    </figure>

                    <br/>
                    요즘은 테라리움 만들기 kit를 구매하여서 바로 만들어 볼 수도 있습니다.
                    <h1>테라리움, 곰팡이 생길까 걱정되시나요?</h1>
                    걱정 마세요! 딱 3가지만 기억해주시면 오래오래 함께 할 수 있답니다.<br />
                    첫번째, 이끼가 건조해졌을 때 분부기로 물을 뿌려주세요!<br />
                    두번째, 테라리움 안까지 공기가 통하게 해주시면 곰팡이 걱정이 싹 사라진답니다!<br />
                    마지막 세번째 이끼의 특성 상 햇빛이 잘 통하는 창가보다는 내 책상 위와 같은 서늘한 곳에 놓아주시면 더 좋습니다.<br />
                    <br />
                    <h1>테라리움에 대한 궁금증이 해소되셨나요?</h1>
                    <hr/>
                    긴 글 읽어주셔서 감사합니다. 식식물물.<br />
                    <br />
                    <h2>© 글에 대한 저작권은 식식물물이 보유하고 있습니다.</h2>
                    <br /><br /><br />
                </article>
                
            </CurationInnerBox>
        </CurationContainer>
    );
};

export default Curation001;

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