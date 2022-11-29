import React from "react";
import styled from "styled-components";
import { CurationHeader } from "../../../components/Curation";
import CurationContainer from "../../../components/Curation/CurationContainer";
import Image from "next/image";
import YoutubePlayer from "../../../components/Curation/YoutubePlayer";
import { curImg4_1, curImg4_2, curImg4_3, curImg4_4, curImg4_5, curImg4_6 } from "../../../utils/curation/curation004";


const Curation004 = () => {
    return (
        <CurationContainer>

            <CurationHeader headerText="다육이 집사가 되어보시겠어요?" />

            <CurationInnerBox>
                <article>
                    <br />안녕하세요, 식집사를 위한 서비스 &lt;식식물물&gt; 입니다.<br /><br />
                    안녕하세요 식물집사 여러분!<br />
                    오늘은 집, 회사 등 어디에서나 쉽게 키울 수 있는 다육식물(다육이) 3종을 추천해드리겠습니다.<br /><br />
                    한 가지 팁을 드리자면,<br />
                    다육이마다 성장하는 계절이 다르기 때문에 초보 다육집사의 경우 성장시기에 맞는 다육식물을 입양하는 것도 중요하다고 합니다.<br />
                    <h1>레티지아</h1>
                    <figure>
                        <ImageWrapper>
                            <br />
                            <div>
                                <Image src={curImg4_1.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                            <div>
                                <Image src={curImg4_2.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                        </ImageWrapper>
                    </figure>
                    <br />
                    <strong>[성장시기]</strong> 봄에서 가을까지 잘 자라요. (여름생장형)<br />
                    <strong>[물주기]</strong> 여름 장마철과 추운 겨울에는 물을 줄여주세요.<br />
                    <strong>[햇빛]</strong>  충분한 햇빛이 필요하나 여름 고온기에는 반그늘로 옮겨주세요.<br />
                    <strong>[온도]</strong> 5~30도 (겨울최저온도 5도)<br />
                    <strong>[주의사항]</strong> 여름 고온기 화상과 무름병에 주의하세요.<br />
                    <br />

                    <h1>염자</h1>
                    <figure>
                        <ImageWrapper>
                            <br />
                            <div>
                                <Image src={curImg4_3.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                            <div>
                                <Image src={curImg4_4.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                        </ImageWrapper>
                    </figure>
                    <br />
                    <strong>[성장시기]</strong>  겨울에 잘 자라요. (겨울생장형)<br />
                    <strong>[물주기]</strong> 생장이 일시적으로 멈추는 한여름에 물을 많이 주면 뿌리가 썩을 수 있어요.<br />
                    <strong>[햇빛]</strong>  밝은 빛이나 직사광선에서 잘 자라요.<br />
                    <strong>[온도]</strong> 실온에서 잘 자라요. 겨울철에는 7~13도의 저온에 두는 것이 좋아요.<br />
                    <strong>[주의사항]</strong> 배수가 안 되면 잿빛곰팡이병에 걸릴 수 있어요.<br />
                    <br />
                    

                    <h1>홍옥</h1>
                    <figure>
                        <ImageWrapper>
                            <br />
                            <div>
                                <Image src={curImg4_5.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                            <div>
                                <Image src={curImg4_6.src} width={"450px"} height={"450px"} />
                                <figcaption>이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a></figcaption>
                            </div>
                        </ImageWrapper>
                    </figure>
                    <br />
                    <strong>[성장시기]</strong> 봄, 여름철 녹색인 잎이 가을 햇빛을 받으면 붉게 물들어요.<br />
                    <strong>[물주기]</strong> 건조에 강하므로 잦은 물 주기는 가급적 자제해주세요.<br />
                    <strong>[햇빛]</strong>  충분한 햇빛이 필요해요.<br />
                    <strong>[온도]</strong> 추위에 강해요. (겨울최저온도 5도)<br />
                    <strong>[주의사항]</strong> 아랫부분 시든 잎을 따줘야 위에 남은 잎들이 통통하게 자랄 수 있어요.<br />
                    <br />
                    <strong>[출처]</strong> 농사로 이미지 출처 : <a href="https://www.nongsaro.go.kr/">https://www.nongsaro.go.kr/</a>
                    <hr />
                    <br />
                    <h1>이번 주말 가족과 함께 가까운 다육농원에 방문해보는 건 어떨까요?</h1>
                    긴 글 읽어주셔서 감사합니다. 식식물물.<br /><br />
                    <hr /><br />
                    
                    <br />
                    <h2>© 글에 대한 저작권은 식식물물이 보유하고 있습니다.</h2>
                    <br /><br /><br />
                </article>

            </CurationInnerBox>
        </CurationContainer>
    );
};

export default Curation004;

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
const ImageWrapper = styled.div`
    display: flex;
    gap: 25px;
`