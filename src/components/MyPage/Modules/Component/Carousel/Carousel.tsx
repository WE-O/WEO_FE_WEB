import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { mypage_test, leftArrow, rightArrow } from "../../../../../utils/images";
import Slide from "./Slide";

const TOTAL_SLIDES = 1;

const Carousel = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    return (
        <Container>
            <SliderContainer ref={slideRef}>
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
                <Slide img={mypage_test} />
            </SliderContainer>

            
                <Button onClick={prevSlide}>
                    <Image src={leftArrow} />
                </Button>


                <Button onClick={nextSlide}>
                    <Image src={rightArrow} />
                </Button>
            

        </Container>
    );
}

export default Carousel;

const Container = styled.div`
    width:60%;
    height:60%;
    overflow: hidden;
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;


const Button = styled.button`
    all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;