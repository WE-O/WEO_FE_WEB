import Image from "next/image";
import styled, { css } from "styled-components";
import sunnyOn from "../../../../../utils/images/sunny_on.png";

import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
  MainLeftDefaultContents,
} from "./MainLefCss";

const MainLeftWeather = () => {
  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>
        {"현재 위치가 들어갈 곳"}
      </MainLeftDeafultItemTitle>
      <MainLeftDefaultContents height={"130px"}>
        <MainLeftWeatherItemWrapper>
          <MainLeftDeafultItem>
            <Image src={sunnyOn} />
            <MainLeftDeafultP type="text">오전</MainLeftDeafultP>
          </MainLeftDeafultItem>

          <MainLeftDeafultItem>
            <Image src={sunnyOn} />
            <MainLeftDeafultP type="text">오후</MainLeftDeafultP>
          </MainLeftDeafultItem>

          <MainLeftDeafultItem>
            <MainLeftDeafultP type="number">14° / 28°</MainLeftDeafultP>
          </MainLeftDeafultItem>

          <MainLeftDeafultItem>
            <MainLeftDeafulButton>현재위치 인증</MainLeftDeafulButton>
          </MainLeftDeafultItem>
        </MainLeftWeatherItemWrapper>
      </MainLeftDefaultContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftWeather;

interface Props {
  type: string;
}

const MainLeftWeatherItemWrapper = styled.div`
  width: 100%;
  position: absolute;
  justify-content: space-evenly;
  display: flex;
  top: 30%;
  gap: 25px;
  align-items: baseline;
`;

const MainLeftDeafultItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const MainLeftDeafultP = styled.span<Props>`
  font-weight: 400;

  ${(Props) =>
    Props.type === "text" &&
    css`
      font-size: 14px;
      color: #999999;
    `}

  ${(Props) =>
    Props.type === "number" &&
    css`
      font-size: 16px;
      font-weight: 400;
    `}
`;

const MainLeftDeafulButton = styled.button`
  width: 110px;
  height: 30px;
  font-size: 14px;
  color: #999999;
  border: 1px solid #999999;
  border-radius: 10px;
  background: white;
`;
