import React from "react";
import styled from "styled-components";
export default function Slide({ img }) {
     
    return (
        <IMG src={img.src} />
    );
}
const IMG = styled.img`
  width: 1500px;
  height: 100px;
`;