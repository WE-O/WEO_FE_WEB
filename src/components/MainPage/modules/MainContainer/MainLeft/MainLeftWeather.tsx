import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useGetWeather } from "../../../Logics/mainLeftLogic";
import { useAppDispatch } from "../../../../../store/hooks";
import { SET_location } from "../../../../../store/modules/UserSlice";

import {
  MainLeftDeafultItemWrapper,
  MainLeftDeafultItemTitle,
} from "./MainLefCss";

const MainLeftWeather = () => {
  const dispatch = useAppDispatch();
  const [weatherData, setWeatherData] = useState({
    aTmp: "",
    aWeather: "",
    mTmp: "",
    mWeather: "",
  });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          let weatherData = await useGetWeather(
            position.coords.latitude,
            position.coords.longitude
          );
          dispatch(SET_location({ lat: lat, lng: lng }));
          setWeatherData((prev) => ({ ...prev, ...weatherData }));
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }, []);

  const onHandleClick = useCallback(() => {
    timer.current && clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      getLocation();
    }, 500);
  }, [getLocation]);

  return (
    <MainLeftDeafultItemWrapper>
      <MainLeftDeafultItemTitle>{"위치"}</MainLeftDeafultItemTitle>
      <MainLeftWeatherContents>
        <MainLeftWeatherItem>
          {weatherData.mWeather ? <Image src={weatherData.mWeather} /> : "ㅡ"}
          <MainLeftWeatherP type="text">오전</MainLeftWeatherP>
        </MainLeftWeatherItem>
        {weatherData.mWeather && weatherData.aWeather && <span>|</span>}
        <MainLeftWeatherItem>
          {weatherData.aWeather ? <Image src={weatherData.aWeather} /> : "ㅡ"}
          <MainLeftWeatherP type="text">오후</MainLeftWeatherP>
        </MainLeftWeatherItem>
        <MainLeftWeatherItem>
          {weatherData.mTmp ? `${weatherData.mTmp}° ` : " ㅡ "}/
          {weatherData.aTmp ? ` ${weatherData.aTmp}°` : " ㅡ "}
        </MainLeftWeatherItem>
        <MainLeftWeatherItem>
          <MainLeftWeatherBtn onClick={() => onHandleClick()}>
            현재위치 인증
          </MainLeftWeatherBtn>
        </MainLeftWeatherItem>
      </MainLeftWeatherContents>
    </MainLeftDeafultItemWrapper>
  );
};

export default MainLeftWeather;

interface Props {
  type: string;
}

const MainLeftWeatherContents = styled.div`
  border-bottom: ${(props) => `1px solid ${props.theme.lightGrey1}`};
  height: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MainLeftWeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const MainLeftWeatherP = styled.span<Props>`
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

const MainLeftWeatherBtn = styled.button`
  width: 110px;
  height: 30px;
  font-size: 14px;
  color: #999999;
  border: 1px solid #999999;
  border-radius: 10px;
  background: white;
  cursor: pointer;
`;
